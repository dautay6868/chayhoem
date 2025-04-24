import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Send } from "lucide-react";
import { isValidPhone, isDateInFuture } from "@/lib/utils";

const bookingFormSchema = z.object({
  fullname: z.string().min(1, { message: "Họ và tên không được để trống" }),
  phone: z.string().refine(isValidPhone, {
    message: "Số điện thoại không hợp lệ"
  }),
  email: z.string().email({ message: "Email không hợp lệ" }).optional().or(z.literal("")),
  pickup_address: z.string().min(1, { message: "Địa chỉ đón không được để trống" }),
  car_type: z.string().min(1, { message: "Vui lòng chọn loại xe" }),
  service_type: z.string().min(1, { message: "Vui lòng chọn dịch vụ" }),
  pickup_date: z.string().refine(isDateInFuture, {
    message: "Ngày đón phải là ngày trong tương lai"
  }),
  pickup_time: z.string().min(1, { message: "Vui lòng chọn giờ đón" }),
  destination: z.string().min(1, { message: "Điểm đến không được để trống" }),
  num_passengers: z.string().refine(
    (val) => {
      const num = parseInt(val);
      return !isNaN(num) && num >= 1 && num <= 29;
    },
    { message: "Số hành khách phải từ 1 đến 29" }
  ),
  notes: z.string().optional(),
  terms: z.boolean().refine(val => val === true, {
    message: "Bạn phải đồng ý với điều khoản dịch vụ",
  }),
});

type BookingFormValues = z.infer<typeof bookingFormSchema>;

export default function BookingForm() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      fullname: "",
      phone: "",
      email: "",
      pickup_address: "",
      car_type: "",
      service_type: "",
      pickup_date: format(new Date(), "yyyy-MM-dd"),
      pickup_time: "",
      destination: "",
      num_passengers: "1",
      notes: "",
      terms: false as unknown as true, // Kiểu dữ liệu sẽ được kiểm tra khi form submit
    },
  });

  const bookingMutation = useMutation({
    mutationFn: (data: BookingFormValues) => {
      setSubmitting(true);
      return apiRequest("POST", "/api/bookings", data);
    },
    onSuccess: () => {
      toast({
        title: "Đặt xe thành công",
        description: "Chúng tôi sẽ liên hệ xác nhận trong vòng 30 phút.",
        variant: "default",
      });
      form.reset();
      setSubmitting(false);
    },
    onError: (error) => {
      toast({
        title: "Đặt xe thất bại",
        description: error instanceof Error ? error.message : "Vui lòng thử lại sau",
        variant: "destructive",
      });
      setSubmitting(false);
    },
  });

  function onSubmit(data: BookingFormValues) {
    // Gửi dữ liệu trực tiếp đến API
    // Server sẽ tự xử lý chuyển đổi kiểu dữ liệu
    bookingMutation.mutate(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="md:col-span-2 mb-2">
          <h3 className="text-xl font-bold text-primary font-montserrat">Thông Tin Cá Nhân</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="fullname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Họ và tên *</FormLabel>
                <FormControl>
                  <Input placeholder="Nguyễn Văn A" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Số điện thoại *</FormLabel>
                <FormControl>
                  <Input placeholder="0912345678" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="example@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="pickup_address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Địa chỉ đón *</FormLabel>
                <FormControl>
                  <Input placeholder="123 Đường ABC, Quận XYZ, Hà Nội" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <div className="md:col-span-2 mb-2 mt-4">
          <h3 className="text-xl font-bold text-primary font-montserrat">Chi Tiết Chuyến Đi</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="car_type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Loại xe *</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="-- Chọn loại xe --" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="carnival_7">Carnival 7 chỗ có lái</SelectItem>
                    <SelectItem value="limousine_9">Limousine 9 chỗ có lái</SelectItem>
                    <SelectItem value="limousine_16">Limousine 16 chỗ có lái</SelectItem>
                    <SelectItem value="limousine_29">Limousine 29 chỗ có lái</SelectItem>
                    <SelectItem value="shared_van">Xe ghép</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="service_type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Loại dịch vụ *</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="-- Chọn dịch vụ --" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="airport">Đưa đón sân bay</SelectItem>
                    <SelectItem value="tour">Tour tham quan</SelectItem>
                    <SelectItem value="rental">Thuê xe dài ngày</SelectItem>
                    <SelectItem value="transfer">Đưa đón theo điểm</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="pickup_date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ngày đón *</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="pickup_time"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Giờ đón *</FormLabel>
                <FormControl>
                  <Input type="time" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="destination"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Điểm đến *</FormLabel>
                <FormControl>
                  <Input placeholder="Hạ Long, Quảng Ninh" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="num_passengers"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Số hành khách *</FormLabel>
                <FormControl>
                  <Input type="number" min="1" max="29" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ghi chú</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Vui lòng cung cấp thêm thông tin chi tiết về chuyến đi của bạn nếu cần."
                  className="resize-none" 
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="terms"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  Tôi đồng ý với <a href="#" className="text-primary hover:underline">điều khoản dịch vụ</a> và <a href="#" className="text-primary hover:underline">chính sách bảo mật</a> *
                </FormLabel>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        
        <div className="text-center">
          <Button 
            type="submit" 
            disabled={submitting}
            className="bg-[#d4af37] hover:bg-amber-500 text-white rounded-full px-8 py-6 font-bold shadow-md"
          >
            Đặt Xe Ngay <Send className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </form>
    </Form>
  );
}
