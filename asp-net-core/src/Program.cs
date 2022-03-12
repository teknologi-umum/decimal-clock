using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Hosting;

var builder = WebApplication.CreateBuilder(new WebApplicationOptions
{
    WebRootPath = "wwwroot"
});

var app = builder.Build();
app.UseStaticFiles();
app.MapGet("/", () => Results.Text(@"
<html>
<head>
    <meta charset=""UTF-8"">
    <meta http-equiv=""X-UA-Compatible"" content=""IE=edge"">
    <meta name=""viewport"" content=""width=device-width, initial-scale=1.0"">
    <title>Decimal Clock</title>
    <link rel=""stylesheet"" href=""style.css"">
</head>
<body>
    <h2>Decimal Clock</h2>
    <div id=""clock-face""></div>
    <h1 id=""clock-time""></h1>
    <script src=""script.js""></script>
</body>
</html>
", "text/html"));


await app.RunAsync();