"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Camera, Upload, Wallet, Sparkles, TrendingUp, ArrowRight, Share, Download, X, QrCode } from "lucide-react"
import Image from "next/image"

export default function RaseedApp() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showProcessing, setShowProcessing] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [selectedPass, setSelectedPass] = useState<number | null>(null)

  const handleUpload = () => {
    setShowProcessing(true)
    setTimeout(() => {
      setShowProcessing(false)
      setShowResults(true)
    }, 3000)
  }

  const walletPasses = [
    {
      id: 1,
      icon: "🛒",
      title: "Grocery Receipt",
      name: "Target Store",
      leftLabel: "Total Spent",
      leftValue: "$189.45",
      rightLabel: "Items",
      rightValue: "20 products",
      qrData: "GROCERY-TARGET-20241207-189.45",
    },
    {
      id: 2,
      icon: "🧽",
      title: "Cleaning Supplies",
      name: "Household Items",
      leftLabel: "Total Spent",
      leftValue: "$24.99",
      rightLabel: "Category",
      rightValue: "3 items",
      qrData: "CLEANING-TARGET-20241207-24.99",
    },
    {
      id: 3,
      icon: "💜",
      title: "Health & Beauty",
      name: "Personal Care",
      leftLabel: "Total Spent",
      leftValue: "$37.39",
      rightLabel: "Products",
      rightValue: "2 items",
      qrData: "HEALTH-TARGET-20241207-37.39",
    },
    {
      id: 4,
      icon: "💰",
      title: "Monthly Spending",
      name: "December 2024",
      leftLabel: "Total Spent",
      leftValue: "$1,247.83",
      rightLabel: "Percentage",
      rightValue: "112% of budget",
      qrData: "MONTHLY-DEC2024-1247.83",
    },
    {
      id: 5,
      icon: "🎉",
      title: "Savings Achievement",
      name: "Money Saved",
      leftLabel: "Amount Saved",
      leftValue: "$30.76",
      rightLabel: "Improvement",
      rightValue: "8.2% less spent",
      qrData: "SAVINGS-DEC2024-30.76",
    },
    {
      id: 6,
      icon: "⚠️",
      title: "Budget Alert",
      name: "Grocery Budget",
      leftLabel: "Used Amount",
      leftValue: "$342.18",
      rightLabel: "Percentage",
      rightValue: "85% of budget",
      qrData: "BUDGET-GROCERY-342.18",
    },
  ]

  const slides = [
    // Slide 1: Chat Interface
    <div key="chat" className="flex flex-col h-screen bg-background">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
            <Wallet className="w-4 h-4 text-white" />
          </div>
          <div>
            <h1 className="font-semibold text-lg">Raseed</h1>
            <p className="text-xs text-muted-foreground">AI Receipt Assistant</p>
          </div>
        </div>
        <Badge variant="secondary" className="text-xs">
          <Sparkles className="w-3 h-3 mr-1" />
          AI Powered
        </Badge>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Welcome Message */}
        <div className="flex items-start gap-3">
          <Avatar className="w-8 h-8">
            <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs">
              R
            </AvatarFallback>
          </Avatar>
          <Card className="max-w-[80%] bg-muted/50">
            <CardContent className="p-3">
              <p className="text-sm">
                Hi! I'm Raseed, your AI receipt assistant. Upload a photo of your receipt and I'll help you organize it
                in your Google Wallet! 📱✨
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Upload Area */}
        {!showProcessing && !showResults && (
          <div className="flex justify-center py-8">
            <Card className="w-full max-w-sm border-2 border-dashed border-muted-foreground/25 hover:border-primary/50 transition-colors">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                  <Camera className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Upload Receipt</h3>
                  <p className="text-sm text-muted-foreground mb-4">Take a photo or upload an image</p>
                  <Button onClick={handleUpload} className="w-full">
                    <Upload className="w-4 h-4 mr-2" />
                    Choose File
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Processing Messages */}
        {showProcessing && (
          <>
            <div className="flex items-start gap-3">
              <Avatar className="w-8 h-8">
                <AvatarImage src="/placeholder-user.jpg" alt="User" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <Card className="max-w-[80%] ml-auto bg-primary text-primary-foreground">
                <CardContent className="p-3">
                  <div className="space-y-2">
                    <p className="text-sm">Receipt uploaded!</p>
                    <div className="relative w-full h-32 rounded-lg overflow-hidden">
                      <Image
                        src="https://miro.medium.com/v2/resize:fit:1400/1*wb4T27TbmOlcuZfcETHhSQ.jpeg"
                        alt="Receipt"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex items-start gap-3">
              <Avatar className="w-8 h-8">
                <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs">
                  R
                </AvatarFallback>
              </Avatar>
              <Card className="max-w-[80%] bg-muted/50">
                <CardContent className="p-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <div
                      className="w-2 h-2 bg-primary rounded-full animate-pulse"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-primary rounded-full animate-pulse"
                      style={{ animationDelay: "0.4s" }}
                    ></div>
                    <span className="text-sm ml-2">Analyzing receipt...</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </>
        )}

        {/* Results */}
        {showResults && (
          <>
            <div className="flex items-start gap-3">
              <Avatar className="w-8 h-8">
                <AvatarImage src="/placeholder-user.jpg" alt="User" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <Card className="max-w-[80%] ml-auto bg-primary text-primary-foreground">
                <CardContent className="p-3">
                  <div className="space-y-2">
                    <p className="text-sm">Receipt uploaded!</p>
                    <div className="relative w-full h-32 rounded-lg overflow-hidden">
                      <Image
                        src="https://miro.medium.com/v2/resize:fit:1400/1*wb4T27TbmOlcuZfcETHhSQ.jpeg"
                        alt="Receipt"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex items-start gap-3">
              <Avatar className="w-8 h-8">
                <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs">
                  R
                </AvatarFallback>
              </Avatar>
              <Card className="max-w-[80%] bg-green-50 border-green-200">
                <CardContent className="p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Wallet className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium text-green-800">Wallet Updated</span>
                  </div>
                  <p className="text-sm text-green-700">
                    Your monthly total spend increased by <span className="font-semibold">$251.83</span>
                  </p>
                  <div className="flex items-center gap-1 mt-2 text-xs text-green-600">
                    <TrendingUp className="w-3 h-3" />
                    <span>6 new passes added to Google Wallet</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </>
        )}
      </div>

      {/* Input Area */}
      <div className="p-4 border-t bg-white/80 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <Input placeholder="Ask about your spending..." className="flex-1" disabled={!showResults} />
          <Button size="icon" disabled={!showResults}>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
        <p className="text-xs text-muted-foreground mt-2 text-center">
          Try: "How much did I spend on groceries this month?"
        </p>
      </div>
    </div>,

    // Slide 2: Google Wallet Generic Passes
    <div key="wallet" className="flex flex-col h-screen bg-gray-100">
      <div className="flex items-center justify-between p-4 border-b bg-white">
        <h1 className="font-semibold text-lg">Google Wallet</h1>
        <Badge variant="outline">6 New</Badge>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {walletPasses.map((pass) => (
          <div
            key={pass.id}
            className="cursor-pointer hover:scale-[1.02] transition-transform"
            onClick={() => setSelectedPass(pass.id)}
          >
            {/* Google Wallet Generic Pass */}
            <div className="bg-white rounded-3xl shadow-lg p-6 max-w-sm mx-auto border border-gray-200">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 flex items-center justify-center">
                  <span className="text-2xl">{pass.icon}</span>
                </div>
                <h2 className="text-lg font-medium text-gray-900">{pass.title}</h2>
              </div>

              {/* Name */}
              <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900 mb-1">{pass.name}</h1>
              </div>

              {/* Data Fields */}
              <div className="flex justify-between items-start mb-8">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{pass.leftLabel}</p>
                  <p className="text-xl font-semibold text-gray-900">{pass.leftValue}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600 mb-1">{pass.rightLabel}</p>
                  <p className="text-xl font-semibold text-gray-900">{pass.rightValue}</p>
                </div>
              </div>

              {/* QR Code */}
              <div className="flex justify-center">
                <div className="w-32 h-32 bg-white border-2 border-gray-200 rounded-lg flex items-center justify-center">
                  {/* QR Code Pattern */}
                  <div className="w-28 h-28 bg-black relative overflow-hidden">
                    <div className="absolute inset-0 grid grid-cols-14 gap-0">
                      {Array.from({ length: 196 }, (_, i) => (
                        <div key={i} className={`${Math.random() > 0.5 ? "bg-black" : "bg-white"} w-full h-full`} />
                      ))}
                    </div>
                    {/* Corner squares */}
                    <div className="absolute top-0 left-0 w-6 h-6 bg-black border-2 border-white">
                      <div className="w-2 h-2 bg-white m-1"></div>
                    </div>
                    <div className="absolute top-0 right-0 w-6 h-6 bg-black border-2 border-white">
                      <div className="w-2 h-2 bg-white m-1"></div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-6 h-6 bg-black border-2 border-white">
                      <div className="w-2 h-2 bg-white m-1"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hidden data for QR */}
              <div className="hidden">{pass.qrData}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4">
        <Button onClick={() => setCurrentSlide(0)} className="w-full" variant="outline">
          Back to Chat
        </Button>
      </div>
    </div>,
  ]

  // Pass Detail Modal
  const selectedPassData = walletPasses.find((pass) => pass.id === selectedPass)

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen relative">
      {slides[currentSlide]}

      {/* Navigation */}
      {currentSlide === 0 && showResults && (
        <div className="fixed bottom-20 right-4">
          <Button onClick={() => setCurrentSlide(1)} size="sm" className="rounded-full shadow-lg">
            <Wallet className="w-4 h-4 mr-2" />
            View Wallet
          </Button>
        </div>
      )}

      {/* Pass Detail Modal */}
      {selectedPass && selectedPassData && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-sm bg-white">
            <CardContent className="p-0">
              {/* Full Pass View */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 relative">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 text-gray-500 hover:bg-gray-100"
                  onClick={() => setSelectedPass(null)}
                >
                  <X className="w-4 h-4" />
                </Button>

                {/* Header */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <span className="text-3xl">{selectedPassData.icon}</span>
                  </div>
                  <h2 className="text-xl font-medium text-gray-900">{selectedPassData.title}</h2>
                </div>

                {/* Name */}
                <div className="mb-10">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{selectedPassData.name}</h1>
                </div>

                {/* Data Fields */}
                <div className="flex justify-between items-start mb-10">
                  <div>
                    <p className="text-sm text-gray-600 mb-2">{selectedPassData.leftLabel}</p>
                    <p className="text-2xl font-semibold text-gray-900">{selectedPassData.leftValue}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600 mb-2">{selectedPassData.rightLabel}</p>
                    <p className="text-2xl font-semibold text-gray-900">{selectedPassData.rightValue}</p>
                  </div>
                </div>

                {/* Large QR Code */}
                <div className="flex justify-center mb-8">
                  <div className="w-40 h-40 bg-white border-2 border-gray-200 rounded-lg flex items-center justify-center">
                    <div className="w-36 h-36 bg-black relative overflow-hidden">
                      <div className="absolute inset-0 grid grid-cols-18 gap-0">
                        {Array.from({ length: 324 }, (_, i) => (
                          <div key={i} className={`${Math.random() > 0.5 ? "bg-black" : "bg-white"} w-full h-full`} />
                        ))}
                      </div>
                      {/* Corner squares */}
                      <div className="absolute top-0 left-0 w-8 h-8 bg-black border-2 border-white">
                        <div className="w-3 h-3 bg-white m-1"></div>
                      </div>
                      <div className="absolute top-0 right-0 w-8 h-8 bg-black border-2 border-white">
                        <div className="w-3 h-3 bg-white m-1"></div>
                      </div>
                      <div className="absolute bottom-0 left-0 w-8 h-8 bg-black border-2 border-white">
                        <div className="w-3 h-3 bg-white m-1"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-3">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <Share className="w-4 h-4 mr-2" />
                    Share Pass
                  </Button>

                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="bg-transparent border-gray-300">
                      <Download className="w-4 h-4 mr-2" />
                      Save
                    </Button>
                    <Button variant="outline" className="bg-transparent border-gray-300">
                      <QrCode className="w-4 h-4 mr-2" />
                      Scan
                    </Button>
                  </div>
                </div>

                {/* Pass Info */}
                <div className="mt-6 text-center">
                  <p className="text-xs text-gray-500">Pass ID: {selectedPassData.qrData}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
