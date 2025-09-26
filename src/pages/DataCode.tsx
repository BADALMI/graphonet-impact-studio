import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  QrCode, 
  Key, 
  CheckCircle, 
  AlertCircle, 
  Copy,
  RefreshCw,
  Shield,
  Clock,
  Users
} from "lucide-react";

const DataCode = () => {
  const [enteredCode, setEnteredCode] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const [codeStatus, setCodeStatus] = useState<"valid" | "invalid" | "expired" | null>(null);
  const [showGenerator, setShowGenerator] = useState(false);

  // Sample valid codes for demo
  const validCodes = ["GRN2024", "DEMO123", "WORKSHOP01", "PROMO2024"];

  const generateCode = () => {
    const prefix = "GRN";
    const randomNum = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    const newCode = `${prefix}${randomNum}`;
    setGeneratedCode(newCode);
  };

  const verifyCode = () => {
    if (!enteredCode.trim()) return;
    
    if (validCodes.includes(enteredCode.toUpperCase())) {
      setCodeStatus("valid");
    } else if (enteredCode.toUpperCase().includes("EXP")) {
      setCodeStatus("expired");
    } else {
      setCodeStatus("invalid");
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedCode);
  };

  const resetForm = () => {
    setEnteredCode("");
    setCodeStatus(null);
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container-custom text-center">
          <h1 className="text-hero text-foreground mb-6">DataCode Access</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Enter your exclusive datacode to access special content, promotions, 
            or generate a new code for your projects.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Code Verification */}
            <Card className="border-0 shadow-[var(--shadow-hover)] bg-gradient-to-br from-white to-gray-50/50">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-4">
                    <Key className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">Verify DataCode</h2>
                  <p className="text-body">Enter your exclusive access code below</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <Label htmlFor="datacode" className="text-sm font-medium text-foreground">
                      Access Code
                    </Label>
                    <Input
                      id="datacode"
                      type="text"
                      value={enteredCode}
                      onChange={(e) => setEnteredCode(e.target.value.toUpperCase())}
                      className="mt-2 text-center text-lg font-mono tracking-wider"
                      placeholder="Enter your code"
                      maxLength={10}
                    />
                  </div>

                  <div className="flex space-x-3">
                    <Button 
                      onClick={verifyCode}
                      disabled={!enteredCode.trim()}
                      className="flex-1 bg-primary hover:bg-primary-dark text-white font-medium hover-lift"
                    >
                      Verify Code
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={resetForm}
                      className="border-2 border-primary text-primary hover:bg-primary hover:text-white"
                    >
                      <RefreshCw className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Status Display */}
                  {codeStatus && (
                    <div className={`p-4 rounded-lg border-2 ${
                      codeStatus === "valid" 
                        ? "bg-green-50 border-green-200" 
                        : codeStatus === "expired"
                        ? "bg-yellow-50 border-yellow-200"
                        : "bg-red-50 border-red-200"
                    }`}>
                      <div className="flex items-center space-x-3">
                        {codeStatus === "valid" ? (
                          <CheckCircle className="w-6 h-6 text-green-600" />
                        ) : (
                          <AlertCircle className="w-6 h-6 text-red-600" />
                        )}
                        <div>
                          <p className={`font-semibold ${
                            codeStatus === "valid" ? "text-green-800" : "text-red-800"
                          }`}>
                            {codeStatus === "valid" && "Code Verified Successfully!"}
                            {codeStatus === "invalid" && "Invalid Code"}
                            {codeStatus === "expired" && "Code Expired"}
                          </p>
                          <p className={`text-sm ${
                            codeStatus === "valid" ? "text-green-600" : "text-red-600"
                          }`}>
                            {codeStatus === "valid" && "You now have access to exclusive content."}
                            {codeStatus === "invalid" && "Please check your code and try again."}
                            {codeStatus === "expired" && "This code has expired. Please contact support."}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Sample Valid Codes */}
                <div className="mt-8 p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold text-foreground mb-3">Demo Codes (For Testing):</h4>
                  <div className="flex flex-wrap gap-2">
                    {validCodes.map((code) => (
                      <Badge key={code} className="bg-primary/10 text-primary hover:bg-primary/20 cursor-pointer" onClick={() => setEnteredCode(code)}>
                        {code}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Code Generator */}
            <Card className="border-0 shadow-[var(--shadow-hover)] bg-gradient-to-br from-white to-gray-50/50">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-navy to-navy-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <QrCode className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">Generate New Code</h2>
                  <p className="text-body">Create a new access code for your project</p>
                </div>

                <div className="space-y-6">
                  <Button 
                    onClick={generateCode}
                    className="w-full bg-navy hover:bg-navy-light text-white font-medium py-6 text-lg hover-lift"
                  >
                    Generate New Code
                  </Button>

                  {generatedCode && (
                    <div className="space-y-4">
                      <div className="p-6 bg-gradient-to-r from-primary/10 to-navy/10 rounded-lg text-center">
                        <p className="text-sm text-muted-foreground mb-2">Your Generated Code:</p>
                        <div className="text-3xl font-mono font-bold text-primary tracking-wider">
                          {generatedCode}
                        </div>
                      </div>

                      <Button 
                        onClick={copyToClipboard}
                        variant="outline"
                        className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white"
                      >
                        <Copy className="w-4 h-4 mr-2" />
                        Copy to Clipboard
                      </Button>
                    </div>
                  )}

                  {/* Code Info */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                      <Shield className="w-4 h-4 text-primary" />
                      <span>Secure 8-character format</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>Valid for 30 days from generation</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                      <Users className="w-4 h-4 text-primary" />
                      <span>Single-use access code</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Card className="border-0 shadow-[var(--shadow-card)] bg-gradient-to-br from-white to-gray-50/50 text-center">
              <CardContent className="p-6">
                <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Secure Access</h3>
                <p className="text-sm text-body">All codes are encrypted and securely generated</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-[var(--shadow-card)] bg-gradient-to-br from-white to-gray-50/50 text-center">
              <CardContent className="p-6">
                <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Time-Limited</h3>
                <p className="text-sm text-body">Codes expire automatically for enhanced security</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-[var(--shadow-card)] bg-gradient-to-br from-white to-gray-50/50 text-center">
              <CardContent className="p-6">
                <Key className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Exclusive Access</h3>
                <p className="text-sm text-body">Unlock special content and promotions</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Need Help with DataCodes?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Contact our support team if you're having trouble with your access code 
            or need assistance with exclusive content.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 px-10 py-6 text-lg font-semibold hover-lift"
            >
              Contact Support
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-10 py-6 text-lg font-semibold hover-lift"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataCode;