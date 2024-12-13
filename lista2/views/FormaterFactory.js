class FormatterFactory {
    static formatterMap = {
      html: FormatterHTML,
      txt: FormatterTXT,
      html2: FormatterHTML2,
      json: FormatterJSON,
      csv: FormatterCSV,
    };
  
    static createFormatter(format) {
      const FormatterClass = this.formatterMap[format];
      if (!FormatterClass) {
        throw new Error(`Unsupported format: ${format}`);
      }
      return new FormatterClass();
    }
  }