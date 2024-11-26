## About
XSScape is a web-based tool designed to help bug bounty hunters and ethical hackers encode Cross-Site Scripting (XSS) payloads to bypass common security filters.

[Live Version](https://crsn.me/xsscape/)

## Supported Encoding
- **HTML Entity Encoding**: Converts characters to HTML entities (e.g. `<` to `&lt;`)
- **HTML Decimal Encoding**: Encodes each character in decimal HTML format (e.g. `A` to `&#65;`)
- **URL Encoding**: Uses URL-encoded format (e.g. ` ` to `%20`)
- **Base64 Encoding**: Converts the payload to a Base64-encoded string
- **Hexadecimal Encoding**: Encodes each character as hexadecimal (e.g. `A` to `%41`)
- **Unicode Encoding**: Uses Unicode escape sequences (e.g. `A` to `\u0041`)
- **JavaScript Unicode Encoding**: Encodes each character using JavaScript Unicode escape sequences (e.g. `A` to `\x41`)

## Disclaimer
XSScape is intended strictly for ethical security testing, such as authorized bug bounty programs and penetration testing assignments. Unauthorized use, including use for malicious purposes, is prohibited and may be illegal.