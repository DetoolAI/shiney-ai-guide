import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { removeBackground, loadImageFromUrl } from '@/utils/backgroundRemoval';
import { useToast } from '@/hooks/use-toast';

const LogoProcessor = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [processedUrl, setProcessedUrl] = useState<string | null>(null);
  const { toast } = useToast();

  const processLogo = async () => {
    setIsProcessing(true);
    try {
      // Load the current logo
      const img = await loadImageFromUrl('/lovable-uploads/710113d7-81ef-41c9-9319-ba9612fc9114.png');
      
      // Remove background
      const processedBlob = await removeBackground(img);
      
      // Create URL for the processed image
      const url = URL.createObjectURL(processedBlob);
      setProcessedUrl(url);
      
      // Download the processed image
      const link = document.createElement('a');
      link.href = url;
      link.download = 'detool-logo-no-bg.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast({
        title: "Background Removed!",
        description: "Your logo has been processed and downloaded. Upload it to replace the current favicon.",
      });
    } catch (error) {
      console.error('Error processing logo:', error);
      toast({
        title: "Error",
        description: "Failed to process the logo. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="fixed top-20 right-4 z-50 bg-card/90 backdrop-blur-sm p-4 rounded-lg border border-border">
      <h3 className="text-sm font-medium mb-2">Logo Processing</h3>
      <Button 
        onClick={processLogo} 
        disabled={isProcessing}
        size="sm"
      >
        {isProcessing ? 'Removing Background...' : 'Process Logo'}
      </Button>
      {processedUrl && (
        <div className="mt-2">
          <img 
            src={processedUrl} 
            alt="Processed logo" 
            className="w-16 h-16 object-contain border rounded"
          />
        </div>
      )}
    </div>
  );
};

export default LogoProcessor;