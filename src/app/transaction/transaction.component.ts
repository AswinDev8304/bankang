import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable'

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  acno: any
  transactions: any
  date: any
  searchString = ""
  constructor(private ds: DataService) { }
  ngOnInit(): void {
    if (localStorage.getItem("currentAcno")) {
      this.acno = localStorage.getItem("currentAcno")
      console.log(this.acno);
      this.ds.getTransaction(this.acno).subscribe((result: any) => {
        this.transactions = result.message
        console.log(this.transactions);

      })
    }
    this.date = new Date()
  }
  filterPipe(data: string) {
    this.searchString = data
  }
  exportPdf() {
   
     //object for jspdf :
    const pdf = new jsPDF()

    //pdf`s out vendi rows and cols
    let col = ['Type', 'Amount', 'Date']
    let row: any = []

    //style for pdf
    pdf.setFontSize(16)
    pdf.text('Account Statements', 15, 10)

    //content`s style
    pdf.setTextColor(99)
    pdf.setFontSize(12)

    //convert array of objects => array of array
    var allitems = this.transactions
    for (let i of allitems) {
      let rowData = [i.type, i.amount, i.date]
      row.push(rowData)
    }

    //convert nested array => pdf
    (pdf as any).autoTable(col, row, { startY: 15 })

    //open converted pdf in new tab:
    pdf.output('dataurlnewwindow')


    //to download and save pdf automatically:
    //pdf.save('transactiondetails.pdf')
  }
}
