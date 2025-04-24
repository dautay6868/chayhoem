import { google } from 'googleapis';
import { JWT } from 'google-auth-library';

// Lấy thông tin xác thực từ biến môi trường hoặc hard-code từ file JSON
const SPREADSHEET_ID = process.env.GOOGLE_SHEETS_SPREADSHEET_ID || '177jlcVTlLTKfW7-QIX_uXKrhXln14MoYCE6pBIXuYOc';

// Hard-code thông tin từ file credentials để tránh vấn đề với định dạng
const PRIVATE_KEY = `-----BEGIN PRIVATE KEY-----
MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDcDQTQVo92Muf0
GZBPWeu3rSTPQjcW6lfNuTJCGuBIFfMIytUbeb/WSWblBpWZxU8isNJaG2ms7XNA
uMC69cRfKV3RI1XfiD9TQXdweieRDYfLDqxvy30L168BQK31hTEk5N25DpuNq2aX
RWnjwK/ypag/aP9OlX53dWsWCdHA/gmAvIHLT5Yj59kccOBmSVuh83z1pXJEWSbp
ZM4mrx3tbP6fcZVGEGLOyveoAfod2GX7XKMvNceoI2hThRit1fJtpXuBd3DR4ogk
HwTI6uApoaduR34Vrrqzo+9N6BL2EeE+okPnNhaLr4epbgGA9Q5yKZqNvLqFcQvA
KpiGb8BfAgMBAAECggEADCBNiRuUCUvx21JDURQf+L26Xw+DkKg2UXhorBrmDCLl
gzEGQF7bsvfViz5rJQ+p9jvvQ5bqImTtan4j5MmhWish5+H+G/TapIBhkBmzL3ui
5Y4382svx2TJ2JRTYcnGtQVFsKp86PgujZx+ItZd+82kMWZcV1zGnNekIJFG9U8Q
Vw6XWmx99BBXr+R3dnYGzRq6nWWIAxCUMiea2NR/EJAIRwrUcoj0zH9MBCnOXtme
+g754RQ/O80idcSuNxVC+uF8KKOyBciSu+hCslWBOKt6NAqNCUFP7xWXr+UA/3of
alA0udwWGLcW8+6jcMazp4J2DnrIydrvexvRQCxh5QKBgQDveLJkZ7P7HYUi1s/Q
+SqyJ7FPn9K6Iz1P7bCHKAznSr1wIG/o5ax35zqQsc+4OJVVl/KyfdYyKgjYnytX
0ShV8iF8R6FWgONWC4SH59ASufTG9vbhVKo499ebRFBcAs4sx3MOCcuzFexqpTjb
+zM6jvIdVfKV9j7k2mVokfTg7QKBgQDrPSwlU72afUYOis07TxnSwjRNuHv2gEPV
8FdiAZ81UefixdAOB500RgLYM+n88vqPrzpzrw+IckZ9xw3fW/QH3Ne+kf3kn2yI
t/Pds3nj7gNdeEoMzQsV7OJIhQZWekF6zi/PZX30rmvXp3vmBBBEOYvNQDx19eRV
ClNbRCUY+wKBgQCnewdw12J17vhtHEVtxsXIoaANqx6LFhhMbVU3wZf8rzX8VINQ
JElR9oLsLZ+0HMa8fS+9C+shXGqhbfi3S03lhhlLPSGmSTA1voprLoJEho+eE50o
jLkcbKH7MnTtVPzzLm7WU52GW3/kOjehCneSreTBBZpKrVThY6jm0KWuJQKBgQDX
bOjtsheT0B+FF8XFB7Z9VQ4zEryrTGFTHcvYW+XiHYT/HupevshPY8IdHsWsuROO
3Ajqgin2abh2XQEuSHZdcPg+dFIPuZPaTKPOpxr8Ci8YvR0LRgdd59Z+VRwtu74V
aZdNFgPYPJdUIfQL/DKtWAnYSHhWCn41BsS5ctmKWwKBgGxuBG2LHqY1+WxmxIai
4BK6CZqt377Z5pfPlgEyvLKeIXZKV9hH7wbMQknf0F/3envpwWHjM4nwuW6hsdK6
IroRdFEqD3ZWex5g+5b+xKsr/G8WU07bQf+RCQ2fjT97PRoLwGB9Wkp21O1w5fyc
Js7lPQ0WGNgPAKRg5CPwmOVa
-----END PRIVATE KEY-----`;

const CLIENT_EMAIL = 'carnival-limousine-sheets@galvanized-vent-201906.iam.gserviceaccount.com';

// Hàm tạo JWT client để xác thực với Google API
const getJwtClient = () => {
  if (!PRIVATE_KEY || !CLIENT_EMAIL) {
    throw new Error('Google Sheets credentials are incomplete. Data was saved locally.');
  }
  
  console.log('Creating JWT client with email:', CLIENT_EMAIL);
  console.log('Spreadsheet ID:', SPREADSHEET_ID);

  return new JWT({
    email: CLIENT_EMAIL,
    key: PRIVATE_KEY,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
};

export async function appendToSheet(values: string[][], sheetType: 'booking' | 'contact' = 'booking'): Promise<void> {
  try {
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID || SPREADSHEET_ID;
    console.log('Appending data to spreadsheet ID:', spreadsheetId);
    console.log('Data to append:', JSON.stringify(values));

    const jwtClient = getJwtClient();
    const sheets = google.sheets({ version: 'v4', auth: jwtClient });

    // Different sheet names for bookings and contacts
    const sheetTitle = sheetType === 'booking' ? 'Đặt xe Carnival' : 'Liên Hệ'; 
    console.log('Targeting sheet:', sheetTitle);
    
    // First try to find the sheet or create it if it doesn't exist
    let spreadsheet;
    try {
      spreadsheet = await sheets.spreadsheets.get({ spreadsheetId });
      console.log('Successfully fetched spreadsheet');
    } catch (err) {
      console.error('Error fetching spreadsheet:', err);
      throw err;
    }
    
    let sheetId = 0;
    let sheetExists = false;
    
    if (spreadsheet.data.sheets) {
      // Look for the sheet
      for (const sheet of spreadsheet.data.sheets) {
        if (sheet.properties?.title === sheetTitle) {
          sheetId = sheet.properties.sheetId || 0;
          sheetExists = true;
          console.log(`Found existing sheet: ${sheetTitle} with ID: ${sheetId}`);
          break;
        }
      }
    }
    
    // If the sheet doesn't exist, create it with headers
    if (!sheetExists) {
      console.log(`Sheet ${sheetTitle} not found, creating it now`);
      try {
        const addSheetResponse = await sheets.spreadsheets.batchUpdate({
          spreadsheetId,
          requestBody: {
            requests: [
              {
                addSheet: {
                  properties: {
                    title: sheetTitle,
                  }
                }
              }
            ]
          }
        });
        console.log('Sheet created successfully');
      } catch (err) {
        console.error('Error creating sheet:', err);
        throw err;
      }
      
      // Different headers for bookings and contacts
      const headers = sheetType === 'booking' 
        ? [['Họ và tên', 'Số điện thoại', 'Email', 'Địa chỉ đón', 'Ngày đón', 'Giờ đón', 'Loại xe', 'Loại dịch vụ', 'Điểm đến', 'Số hành khách', 'Ghi chú', 'Thời gian đặt']]
        : [['Họ và tên', 'Số điện thoại', 'Email', 'Tiêu đề', 'Nội dung', 'Thời gian gửi']];
      
      const range = sheetType === 'booking' ? `${sheetTitle}!A1:L1` : `${sheetTitle}!A1:F1`;
      
      await sheets.spreadsheets.values.append({
        spreadsheetId,
        range,
        valueInputOption: 'RAW',
        requestBody: {
          values: headers
        }
      });
    }
    
    // Append the data to the sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${sheetTitle}!A1`,
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values
      }
    });
    
    console.log(`Data appended successfully to Google Sheets (${sheetTitle})`);
  } catch (error) {
    console.error('Error appending to Google Sheets:', error);
    throw error;
  }
}