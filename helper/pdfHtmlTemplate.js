import { numberToWords } from 'number-to-words';
import { getRoundedUpAmount } from '.';
async function generateHTML(bill) {
  console.log("🚀 ~ file: pdfHtmlTemplate.js:2 ~ generateHTML ~ bill:", bill);
  const date = new Date(bill?.invoiceDate?.seconds * 1000); // Convert seconds to milliseconds

  const formattedDate = date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
  // const asset = Asset.fromModule(require('../../assets/logo.png'));
  // const image = await manipulateAsync(asset.localUri ?? asset.uri, [], { base64: true });
  return `
  <!DOCTYPE html>
<html xml:lang="en" lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <style type="text/css">
      * {
        margin: 0;
        padding: 0;
        text-indent: 0;
      }
      p {
        color: black;
        font-family: Arial, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 10pt;
        margin: 0pt;
      }
      .s1 {
        color: black;
        font-family: Arial, sans-serif;
        font-style: normal;
        font-weight: bold;
        text-decoration: none;
        font-size: 11pt;
      }
      .s2 {
        color: black;
        font-family: Arial, sans-serif;
        font-style: normal;
        font-weight: bold;
        text-decoration: none;
        font-size: 14pt;
      }
      .s3 {
        color: black;
        font-family: Arial, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 8pt;
      }
      .s4 {
        color: black;
        font-family: Arial, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 9pt;
      }
      .s5 {
        color: black;
        font-family: Arial, sans-serif;
        font-style: normal;
        font-weight: bold;
        text-decoration: none;
        font-size: 8pt;
      }
      .s6 {
        color: black;
        font-family: Arial, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 8pt;
        vertical-align: 2pt;
      }
      .s7 {
        color: black;
        font-family: Arial, sans-serif;
        font-style: normal;
        font-weight: bold;
        text-decoration: none;
        font-size: 8pt;
        vertical-align: 1pt;
      }
      .s8 {
        color: black;
        font-family: Arial, sans-serif;
        font-style: normal;
        font-weight: bold;
        text-decoration: none;
        font-size: 10pt;
      }
      .s9 {
        color: black;
        font-family: Arial, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 9pt;
        vertical-align: -1pt;
      }
      .s10 {
        color: black;
        font-family: Arial, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 10pt;
        vertical-align: -1pt;
      }
      .s11 {
        color: black;
        font-family: Arial, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 10pt;
        vertical-align: -2pt;
      }
      .s12 {
        color: black;
        font-family: Arial, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 10pt;
      }
      .s13 {
        color: black;
        font-family: Arial, sans-serif;
        font-style: normal;
        font-weight: bold;
        text-decoration: none;
        font-size: 8pt;
        vertical-align: -1pt;
      }
      .s14 {
        color: black;
        font-family: Arial, sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 10pt;
      }
      .s15 {
        color: black;
        font-family: Arial, sans-serif;
        font-style: normal;
        font-weight: bold;
        text-decoration: none;
        font-size: 9pt;
      }
      .s16 {
        color: black;
        font-family: Arial, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 7pt;
      }
      .s17 {
        color: black;
        font-family: Arial, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 8pt;
        vertical-align: 1pt;
      }
      /* table, tbody {vertical-align: top; overflow: visible; } */
      body {margin: 60pt}
      .wrapper {
        width: 780pt;
      }
      .border {
        border: 1px solid black;
      }
      .border-top {
        border-top: 1px solid black;
      }
      .border-left {
        border-left: 1px solid black;
      }
      .border-right {
        border-right: 1px solid black;
      }
      .border-bottom {
        border-bottom: 1px solid black;
      }
      .capital {
        text-transform: uppercase;
      }
      .table_value {
        margin-left: 20pt;
      }
      .product_col {
        text-align: right;
        padding: 20pt 4pt;
      }
      .product_header {
        border-collapse: collapse;
        padding: 4pt;
      }
    </style>
  </head>
  <body>
    <div class="wrapper">
      <!-- Header section -->
      <div style="display: flex" class="border">
        <div style="padding: 6pt">
          <img width="150" height="80" src="./logo.png" />
        </div>
        <div
          class="border-left"
          style="width: 80%; padding: 6pt; text-align: -webkit-center"
        >
          <p
            class="s1"
            style="
              padding-left: 5pt;
              padding-right: 10pt;
              text-indent: 0pt;
              line-height: 12pt;
              text-align: center;
            "
          >
            TAX INVOICE
          </p>
          <p
            class="s2"
            style="
              padding-top: 1pt;
              padding-left: 5pt;
              padding-right: 14pt;
              text-indent: 0pt;
              line-height: 18pt;
              text-align: center;
            "
          >
            VISION LESSOR
          </p>
          <p
            class="s3"
            style="
              padding-left: 74pt;
              width: 376pt;
              padding-right: 75pt;
              text-indent: 0pt;
              line-height: 10pt;
              text-align: center;
            "
          >
            Ground Floor, 94-Ayodhya Row House, NR. Brilliyant School, Dabholi,
            Katargam, Surat, Gujarat-395004. Mo no:+919372587046.
          </p>
          <div
            style="
              display: flex;
              justify-content: space-around;
              margin-top: 6pt;
              width: 100%;
            "
          >
            <p
              class="s1"
              style="
                padding-left: 5pt;
                padding-right: 6pt;
                text-indent: 0pt;
                text-align: center;
              "
            >
              GSTIN No. : 24AAJHN7158R1ZC
            </p>
            <p
              class="s1"
              style="
                padding-left: 5pt;
                padding-right: 6pt;
                text-indent: 0pt;
                text-align: center;
              "
            >
              PAN No. : AAJHN7158R
            </p>
          </div>
        </div>
      </div>
      <!-- Bill Details -->
      <div class="border" style="margin-top: 6pt">
        <!-- Invoice details -->
        <div style="display: flex" class="border-bottom">
          <div style="width: 40%; padding: 6pt">
            <table>
              <tbody>
                <tr>
                  <td><p>Invoice No.</p></td>
                  <td><p class="s8 table_value">: ${bill?.invoiceNo || '-'}</p></td>
                </tr>
                <tr>
                  <td><p>Invoice Date</p></td>
                  <td><p class="table_value">: ${formattedDate || '-'}</p></td>
                </tr>
                <tr>
                  <td><p>State</p></td>
                  <td><p class="table_value">: ${bill?.state?.label || '-'}</p></td>
                  <td><p class="table_value">State Code</p></td>
                  <td><p>: ${bill?.state?.value || '-'}</p></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style="width: 20%" class="border-left border-right"></div>
          <div style="width: 40%; padding: 6pt">
            <table>
              <tbody>
                <tr>
                  <td><p>Transport name</p></td>
                  <td>
                    <p class="s8 capital table_value">: ${bill?.transporterName || '-'}</p>
                  </td>
                </tr>
                <tr>
                  <td><p>Veh no</p></td>
                  <td><p class="table_value">: ${bill?.vehNo || '-'}</p></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- Receiver and bank details -->
        <div style="display: flex; width: 100%">
          <!-- Receiver details -->
          <div style="width: 50%" class="border-right">
            <div>
              <p class="s8 border-bottom" style="text-align: center">
                Details of Receiver (Billed to)
              </p>
            </div>
            <div style="padding: 5pt">
              <table>
                <tbody>
                  <tr>
                    <td><p>Name.</p></td>
                    <td>
                      <p class="s8 table_value capital">
                        : ${bill?.receiverName?.label || '-'}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td><p>Address</p></td>
                    <td>
                      <p class="table_value">
                        : ${bill?.receiverAddress || '-'}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td><p>State</p></td>
                    <td><p class="table_value">: ${bill?.receiverState || '-'}</p></td>
                    <td><p>State Code</p></td>
                    <td><p>: ${bill?.receiverStateCode || '-'}</p></td>
                  </tr>
                  <tr>
                    <td><p class="s8">GSTIN</p></td>
                    <td>
                      <p class="s8 table_value capital">: ${bill?.receiverGSTIN || '-'}</p>
                    </td>
                  </tr>
                  <tr>
                    <td><p class="s8">PAN No.</p></td>
                    <td><p class="s8 table_value capital">: ${bill?.receiverPan || '-'}</p></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!-- Bank details -->
          <div style="width: 50%" class="">
            <div>
              <p class="s8 border-bottom" style="text-align: center">
                Bank Details
              </p>
            </div>
            <div style="padding: 5pt">
              <table>
                <tbody>
                  <tr>
                    <td><p class="s8">Bank Name</p></td>
                    <td>
                      <p class="s8 table_value capital">
                        : THE VARACHHA CO-OPERATIVE BANK LTD. SURAT
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td><p class="s8">Account No</p></td>
                    <td>
                      <p class="s8 table_value capital">: 00630110681615</p>
                    </td>
                  </tr>
                  <tr>
                    <td><p class="s8">IFSC Code</p></td>
                    <td><p class="s8 table_value capital">: VARA0289006</p></td>
                  </tr>
                  <tr>
                    <td><p class="s8">Branch</p></td>
                    <td><p class="s8 table_value capital">: KATARGAM</p></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div>
          <table style="border-collapse: collapse; width: 100%">
            <tr class="product_row" style="height: 10%">
              <th class="product_header border" style="border-left: 0">
                <p class="s1">Sr.</p>
              </th>
              <th class="product_header border">
                <p class="s1">Description of Goods</p>
              </th>
              <th class="product_header border"><p class="s1">HSN/SAC</p></th>
              <th class="product_header border">
                <p class="s1">Quantity in No.</p>
              </th>
              <th class="product_header border"><p class="s1">Unit</p></th>
              <th class="product_header border">
                <p class="s1">Quantity in PCS/KG</p>
              </th>
              <th class="product_header border"><p class="s1">Rate</p></th>
              <th class="product_header border">
                <p class="s1">Assble. Value</p>
              </th>
              <th class="product_header border"><p class="s1">GST %</p></th>
              ${bill?.isIGSTIN ? 
              `<th class="product_header border"><p class="s1">IGST</p></th>`
              : `<th class="product_header border"><p class="s1">SGST</p></th>
              <th class="product_header border"><p class="s1">CGST</p></th>`
            }
              <th class="product_header border" style="border-right: 0">
                <p class="s1">Amount In INR</p>
              </th>
            </tr>
            ${bill?.products && bill?.products.length && bill.products.map((product,id) => 
                `<tr class="product_row" style="vertical-align: top">
                  <td class="product_col border-right"><p class="s12">${id + 1}.</p></td>
                  <td class="product_col border-right" style="text-align: left">
                    <p class="s12">${product?.name?.label || '-'}</p>
                  </td>
                  <td class="product_col border-right">
                    <p class="s12">${product?.hsn || '-'}</p>
                  </td>
                  <td class="product_col border-right">
                    <p class="s12">${product?.quantity || '-'}</p>
                  </td>
                  <td class="product_col border-right"><p class="s12">${product?.unit?.label || '-'}</p></td>
                  <td class="product_col border-right">
                    <p class="s12">${product?.pice || '-'}</p>
                  </td>
                  <td class="product_col border-right">
                    <p class="s12">${product?.price || '-'}</p>
                  </td>
                  <td class="product_col border-right">
                    <p class="s12">${product?.assembleValue || '-'}</p>
                  </td>
                  <td class="product_col border-right"><p class="s12">${product?.gst || '-'}</p></td>
                  ${product?.isIGSTIN ? 
                  `<td class="product_col border-right">
                    <p class="s12">${product?.assembleIgst || '-'}</p>
                  </td>` :
                  `<td class="product_col border-right">
                      <p class="s12">${(parseFloat(product?.assembleIgst)/2).toFixed(2) || '-'}</p>
                    </td>
                    <td class="product_col border-right">
                      <p class="s12">${(parseFloat(product?.assembleIgst)/2).toFixed(2) || '-'}</p>
                    </td>`
                  }
                  <td class="product_col border-right" style="border-right: 0">
                    <p class="s12">${product?.totalProductPrice || '-'}</p>
                  </td>
                </tr>`
              )
            }
            <tr class="product_row">
              <td
                class="border"
                style="text-align: center; border-left: 0; padding: 4pt"
                colspan="2"
              >
                <p class="s1">Sub total</p>
              </td>
              <td class="border"><p class="s12"></p></td>
              <td class="border"><p class="s12"></p></td>
              <td class="border"><p class="s12"></p></td>
              <td class="border"><p class="s12"></p></td>
              <td class="border"><p class="s12"></p></td>
              <td class="border"><p class="s12"></p></td>
              <td class="border"><p class="s12"></p></td>
              ${bill?.isIGSTIN ? `
              <td class="border"><p class="s1">${bill?.totalGstIn || '-'}</p></td>` : `
              <td class="border"><p class="s1">${(bill?.totalGstIn / 2).toFixed(2) || '-'}</p></td>
              <td class="border"><p class="s1">${(bill?.totalGstIn / 2).toFixed(2) || '-'}</p></td>
              `}
              <td class="border" style="border-right: 0; text-align: right">
                <p class="s1">${bill?.totalSum || '-'}</p>
              </td>
            </tr>
            <tr class="product_row">
              <td
                class="border"
                style="border-top: 0; border-left: 0"
                colspan="8"
              >
                <div>
                  <p
                    style="
                      margin-top: 12pt;
                      text-align: center;
                      text-decoration: underline;
                    "
                    class="s1"
                  >
                    
                  </p>
                  <table style="width: 50%">
                    <tr>
                      <th>
                        <p
                          class="s8"
                          style="text-align: center; width: 100pt; padding: 6pt"
                        >
                          
                        </p>
                      </th>
                      <th>
                        <p
                          class="s8"
                          style="text-align: center; width: 100pt; padding: 6pt"
                        >
                          
                        </p>
                      </th>
                      <th>
                        <p
                          class="s8"
                          style="text-align: center; width: 100pt; padding: 6pt"
                        >
                          
                        </p>
                      </th>
                      <th>
                        <p
                          class="s8"
                          style="text-align: center; width: 100pt; padding: 6pt"
                        >
                          
                        </p>
                      </th>
                    </tr>
                    <tr>
                      <td>
                        <p
                          class="s8"
                          style="text-align: center; width: 100pt; padding: 6pt"
                        >
                          
                        </p>
                      </td>
                      <td>
                        <p
                          class="s8"
                          style="text-align: center; width: 100pt; padding: 6pt"
                        >
                          
                        </p>
                      </td>
                      <td>
                        <p
                          class="s8"
                          style="text-align: center; width: 100pt; padding: 6pt"
                        >
                          
                        </p>
                      </td>
                      <td>
                        <p
                          class="s8"
                          style="text-align: center; width: 100pt; padding: 6pt"
                        >
                          
                        </p>
                      </td>
                    </tr>
                  </table>
                </div>
              </td>
              <td
                colspan=${bill.isIGSTIN ? '2' : '3'}
                class="border"
                style="
                  border-top: 0;
                  vertical-align: bottom;
                  padding: 4pt;
                  text-align: right;
                "
              >
                <p class="s12">Round Off</p>
              </td>
              <td
                class="border"
                style="
                  border-right: 0;
                  vertical-align: bottom;
                  padding: 4pt;
                  text-align: right;
                "
              >
                <p class="s12">-${getRoundedUpAmount(bill.totalSum) || '-'}</p>
              </td>
            </tr>
            <tr class="product_row">
              <td
                class="border"
                style="border-top: 0; border-left: 0"
                colspan="8"
              >
                <div>
                  <table style="width: 76.5%">
                    <tr>
                      <!-- <th><p class="s8" style="text-align: center; width: 1pt;"></p></th> -->
                      <th>
                        <p class="s8" style="text-align: center; width: 100pt">
                          Total
                        </p>
                      </th>
                      <th>
                        <p class="s8" style="text-align: center; width: 100pt">
                          
                        </p>
                      </th>
                      <th>
                        <p class="s8" style="text-align: center; width: 100pt">
                          
                        </p>
                      </th>
                      <th>
                        <p class="s8" style="text-align: center; width: 100pt">
                          
                        </p>
                      </th>
                    </tr>
                  </table>
                </div>
              </td>
              <td
                colspan=${bill.isIGSTIN ? '2' : '3'}
                class="border"
                style="border-top: 0; padding: 4pt; text-align: right"
              >
                <p class="s1">Invoice Total</p>
              </td>
              <td class="border" style="border-right: 0; padding: 4pt">
                <p class="s1" style="text-align: right">${Math.floor(bill?.totalSum || 0) || '-'}</p>
              </td>
            </tr>
          </table>
        </div>
        <!-- Amount in Words -->
        <div class="border-bottom" style="display: flex; padding: 6pt">
          <p class="s1">Invoice value (in words):</p>
          <p class="s12" style="margin-left: 8pt">
            ${numberToWords.toWords(Math.floor(bill?.totalSum || 0)) || '-'}
          </p>
        </div>
        <!-- Footer -->
        <div>
          <div
            style="
              display: flex;
              width: 98%;
              justify-content: space-between;
              text-align: center;
              padding: 4pt;
            "
          >
            <p class="s1">TERM & CONDITION</p>
            <p class="s1">For, VISION LESSOR HUF (KARTA)</p>
          </div>
          <div style="position: relative; padding-left: 4pt">
            <p>Subject to SURAT jurisdiction.</p>
            <p>
              038Gujarat038GujaratWe declare that invoice shows the actual price
              of
            </p>
            <p>the goods described.Payment within 30 Days from</p>
            <p>
              receipt of material.Interest @ 24% p.a. shall be charged after
            </p>
            <p>
              due date of payment.Duties & Taxes,if other than mentioned above
              shall also be w
            </p>
            <img
              style="position: absolute; right: -130pt; top: -60pt"
              src="./NareshMama.png"
              alt="sign"
            />
          </div>
          <div
            style="
              display: flex;
              width: 98%;
              justify-content: space-between;
              text-align: center;
              padding: 4pt;
            "
          >
            <p>E. & O. E.</p>
            <p class="s1">
              Certified that the particulars given above are true and correct.
            </p>
            <p class="s1">Authorized Signatory</p>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
  `;
}

export default generateHTML;
