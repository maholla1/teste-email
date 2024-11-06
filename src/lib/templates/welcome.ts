export const welcomeTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome Email</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
      background-color: #f9f9f9;
    }

    .container {
      width: 100%;
      background-color: #f9f9f9;
      padding: 20px;
    }

    .email-body {
      background-color: #ffffff;
      width: 100%;
      max-width: 600px;
      margin: 0 auto;
      border-radius: 8px;
      overflow: hidden;
    }

    .header {
      background-color: #ffcf57;
      padding: 30px;
      text-align: center;
    }

    .header img {
      width: 150px;
    }

    .content {
      text-align: center;
      padding: 40px;
    }

    .content h1 {
      color: #7747FF;
      font-size: 32px;
      margin: 0;
    }

    .content p {
      font-size: 16px;
      color: #555555;
      margin: 20px 0;
    }

    .button {
      background-color: #7747FF;
      color: #ffffff;
      padding: 12px 30px;
      font-size: 18px;
      text-decoration: none;
      border-radius: 4px;
      display: inline-block;
      margin-top: 20px;
    }

    .button:hover {
      background-color: #5a39b1;
    }

    @media (max-width: 600px) {
      .content h1 {
        font-size: 28px;
      }

      .button {
        font-size: 16px;
        padding: 10px 25px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="email-body">
      <div class="header">
        <img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/1566/BTS_your_logo.png" alt="Your Logo">
      </div>

      <div class="content">
        <h1>Hi {{name}},</h1>
        <p>Thank you for signing up! To confirm your email address, please click the link below:</p>
        <a href="http://localhost:3000" class="button">Confirm Email</a>
      </div>
    </div>
  </div>
</body>
</html>
	</table><!-- End -->
</body>

</html>
`;
