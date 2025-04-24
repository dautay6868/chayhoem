import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send, Loader2, CheckCircle, User, Mail, Phone, FileText } from "lucide-react";
import { isValidPhone } from "@/lib/utils";

const contactFormSchema = z.object({
  contact_name: z.string().min(1, { message: "Họ và tên không được để trống" }),
  contact_email: z.string().email({ message: "Email không hợp lệ" }),
  contact_phone: z.string().optional()
    .refine((val) => !val || isValidPhone(val), {
      message: "Số điện thoại không hợp lệ"
    }),
  subject: z.string().min(1, { message: "Tiêu đề không được để trống" }),
  message: z.string().min(10, { message: "Nội dung phải có ít nhất 10 ký tự" }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      contact_name: "",
      contact_email: "",
      contact_phone: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: (data: ContactFormValues) => {
      setSubmitting(true);
      return apiRequest("POST", "/api/contacts", data);
    },
    onSuccess: () => {
      toast({
        title: "Gửi tin nhắn thành công",
        description: "Chúng tôi sẽ phản hồi trong thời gian sớm nhất.",
        variant: "default",
      });
      form.reset();
      setSubmitting(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 5000);
    },
    onError: (error) => {
      toast({
        title: "Gửi tin nhắn thất bại",
        description: error instanceof Error ? error.message : "Vui lòng thử lại sau",
        variant: "destructive",
      });
      setSubmitting(false);
    },
  });

  function onSubmit(data: ContactFormValues) {
    contactMutation.mutate(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="contact_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium flex items-center gap-1.5">
                  <User className="h-4 w-4 text-primary" />
                  Họ và tên *
                </FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Nguyễn Văn A" 
                    className="rounded-lg border-gray-300 focus-visible:ring-primary"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="contact_email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium flex items-center gap-1.5">
                  <Mail className="h-4 w-4 text-primary" />
                  Email *
                </FormLabel>
                <FormControl>
                  <Input 
                    placeholder="example@email.com" 
                    className="rounded-lg border-gray-300 focus-visible:ring-primary"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="contact_phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700 font-medium flex items-center gap-1.5">
                <Phone className="h-4 w-4 text-primary" />
                Số điện thoại
              </FormLabel>
              <FormControl>
                <Input 
                  placeholder="0912345678" 
                  className="rounded-lg border-gray-300 focus-visible:ring-primary"
                  {...field} 
                />
              </FormControl>
              <FormDescription className="text-xs text-gray-500">
                Chúng tôi sẽ không chia sẻ số điện thoại của bạn với bất kỳ ai khác
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700 font-medium flex items-center gap-1.5">
                <FileText className="h-4 w-4 text-primary" />
                Tiêu đề *
              </FormLabel>
              <FormControl>
                <Input 
                  placeholder="Yêu cầu thông tin dịch vụ" 
                  className="rounded-lg border-gray-300 focus-visible:ring-primary"
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700 font-medium">Nội dung *</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Mô tả yêu cầu của bạn..."
                  className="resize-none min-h-[150px] rounded-lg border-gray-300 focus-visible:ring-primary" 
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="pt-2">
          <Button 
            type="submit" 
            disabled={submitting}
            className="bg-primary hover:bg-primary/90 text-white w-full py-6 rounded-lg relative"
          >
            {submitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Đang gửi...
              </>
            ) : success ? (
              <>
                <CheckCircle className="mr-2 h-4 w-4" />
                Đã gửi thành công
              </>
            ) : (
              <>
                Gửi Tin Nhắn
                <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}
