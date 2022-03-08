using dom
using util
using web
using webmod
using wisp

class TeknumDecimalClock : AbstractMain
{
  @Opt { help = "http port" }
  Int port := 8080

  override Int run()
  {
    wisp := WispService
    {
      it.httpPort = this.port
      it.root = DecimalClockWebMod()
    }
    return runServices([wisp])
  }
}

const class DecimalClockWebMod : WebMod
{
  new make()
  {
    pods  := ["sys","dom"].map |n| { Pod.find(n) }
    files := File[,]
      .addAll(FilePack.toAppJsFiles(pods))
      .add(compileScriptJs)
    this.jsPack = FilePack(files)
  }

  override Void onGet()
  {
    switch (req.modRel.path.first)
    {
      case null:     onIndex
      case "script.js": jsPack.onGet
    }
  }

  Void onIndex()
  {
    res.headers["Content-Type"] = "text/html; charset=utf-8"
    styleFile := File(`./style.css`)
    style := styleFile.readAllStr

    out := res.out
    out.docType5
    out.html

    out.head
      .title.w("Decimal Clock").titleEnd
      .tag("meta", "charset='UTF-8'", true)
      .tag("meta", "name='viewport' content='width=device-width, initial-scale=1.0'", true)
      .initJs(["main":"teknum::JsDecimalClock"])
      .includeJs(`script.js`)
      .style.w(style).styleEnd
    out.headEnd

    out.body
       .h2.w("Decimal Clock").h2End
       .div("id='clock-face'").divEnd
       .h1("id='clock-time'").h1End
    out.bodyEnd
    out.htmlEnd
  }

  private File compileScriptJs()
  {
    src  := File(`./script.fan`)
    js   := Env.cur.compileScriptToJs(src, ["podName":"teknum"])
    temp := Env.cur.tempDir + `script.js`
    temp.out.print(js).sync.close

    // File(`./dist/script.js`).out.print(js).sync.close
    return temp
  }

  private const FilePack jsPack
}

