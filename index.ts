import QRCode from 'qrcode';
import Papa from "papaparse";

const options = {
  errorCorrectionLevel: 'L',
  type: 'image/png',
  quality: 0.9,
  margin: 1,
  color: {
    dark:"#000",
    light:"#fff"
  }
}
  
export const genQR = (url) => { 
  QRCode.toDataURL(url, options, function (err: any, url: string) {
    if (err) throw err
    return url;
  });
}
