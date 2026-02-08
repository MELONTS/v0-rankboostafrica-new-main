"use client"

import React, { useState, useEffect, useCallback, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Send, CheckCircle, Loader2, AlertCircle } from "lucide-react"

interface ContactFormProps {
  trigger?: React.ReactNode
  defaultService?: string
  defaultSubject?: string
  defaultMessage?: string
}

const services = [
  { value: "seo", label: "SEO Services", subject: "SEO Services Inquiry" },
  { value: "web-development", label: "Web Development", subject: "Web Development Inquiry" },
  { value: "hosting", label: "Web Hosting", subject: "Web Hosting Inquiry" },
  { value: "content", label: "Content Marketing", subject: "Content Marketing Inquiry" },
  { value: "general", label: "General Inquiry", subject: "General Inquiry" },
]

export function ContactForm({
  trigger,
  defaultService = "general",
  defaultSubject = "",
  defaultMessage = "",
}: ContactFormProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const timestampRef = useRef<number>(Date.now())
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: defaultService,
    subject: defaultSubject,
    message: defaultMessage,
    honeypot: "", // Hidden field to catch bots
  })

  // Reset form with default values when dialog opens
  useEffect(() => {
    if (isOpen) {
      timestampRef.current = Date.now()
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: defaultService,
        subject: defaultSubject,
        message: defaultMessage,
        honeypot: "",
      })
      setIsSuccess(false)
      setError(null)
    }
  }, [isOpen, defaultService, defaultSubject, defaultMessage])

  const handleServiceChange = useCallback((value: string) => {
    const selectedService = services.find((s) => s.value === value)
    setFormData((prev) => ({
      ...prev,
      service: value,
      subject: selectedService?.subject || prev.subject,
    }))
  }, [])

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: timestampRef.current.toString(),
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      setIsSuccess(true)
      
      // Haptic feedback on success
      if (typeof navigator !== "undefined" && "vibrate" in navigator) {
        navigator.vibrate([50, 50, 50])
      }

      // Close dialog after showing success
      setTimeout(() => {
        setIsOpen(false)
      }, 2500)
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred. Please try again.')
      
      // Haptic feedback on error
      if (typeof navigator !== "undefined" && "vibrate" in navigator) {
        navigator.vibrate(100)
      }
    } finally {
      setIsSubmitting(false)
    }
  }, [formData])

  const triggerHaptic = useCallback(() => {
    if (typeof navigator !== "undefined" && "vibrate" in navigator) {
      navigator.vibrate(15)
    }
  }, [])

  const handleInputChange = useCallback((field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }, [])

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild onClick={triggerHaptic}>
        {trigger || (
          <Button size="lg" className="group">
            <Send className="mr-2 w-4 h-4" />
            Contact Us
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl">Get In Touch</DialogTitle>
          <DialogDescription>
            Fill out the form below and we will get back to you within 24 hours.
          </DialogDescription>
        </DialogHeader>

        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
            <p className="text-muted-foreground">
              Thank you for reaching out. We will be in touch soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            {/* Honeypot field - hidden from users, visible to bots */}
            <div className="absolute -left-[9999px] opacity-0 pointer-events-none" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input
                type="text"
                id="website"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={formData.honeypot}
                onChange={(e) => handleInputChange("honeypot", e.target.value)}
              />
            </div>

            {error && (
              <div className="flex items-center gap-2 p-3 bg-destructive/10 border border-destructive/20 rounded-md text-destructive text-sm">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  required
                  minLength={2}
                  maxLength={100}
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  maxLength={254}
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+27 12 345 6789"
                  maxLength={20}
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="service">Service Interest *</Label>
                <Select value={formData.service} onValueChange={handleServiceChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service.value} value={service.value}>
                        {service.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Subject *</Label>
              <Input
                id="subject"
                placeholder="How can we help you?"
                required
                minLength={5}
                maxLength={200}
                value={formData.subject}
                onChange={(e) => handleInputChange("subject", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message *</Label>
              <Textarea
                id="message"
                placeholder="Tell us about your project or inquiry..."
                required
                minLength={10}
                maxLength={5000}
                rows={4}
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
              />
            </div>

            <p className="text-xs text-muted-foreground">
              By submitting this form, you agree to our privacy policy. We will never share your information with third parties.
            </p>

            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting}
              onClick={triggerHaptic}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2 w-4 h-4" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
