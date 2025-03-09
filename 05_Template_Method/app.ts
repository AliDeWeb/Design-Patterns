abstract class ReportGenerator {
  public generate() {
    this.fetchData();
    this.processData();
    this.renderData();
  }

  protected fetchData() {
    console.log("fetching data");
  }

  protected processData() {
    console.log("processing data");
  }

  protected renderData() {}
}

class HtmlReport extends ReportGenerator {
  protected renderData(): void {
    console.log("rendering HTML");
  }
}

class PdfReport extends ReportGenerator {
  protected renderData(): void {
    console.log("rendering PDF");
  }
}

(() => {
  const htmlReport = new HtmlReport();
  htmlReport.generate();

  const pdfReport = new PdfReport();
  pdfReport.generate();
})();
