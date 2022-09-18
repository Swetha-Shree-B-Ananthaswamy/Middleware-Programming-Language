
loans =[]
loan1 ={
    "id": 1,
    "customerName": "Sirisha",
    "phone": "208-227-4046",
    "address": "1717 s Dorsey Lane",
    "loanAmount": "1000",
    "intrest": "4",
    "loanTermYears": "48",
    "loanType":"education",
    "description":"loan amount required for education",
    "calculatedLoanAmount": function() {
      amount = Number(this.loanAmount)
      rate = Number(this.intrest)
      months = Number(this.loanTermYears)
      // Calculating interest per month
      const interest = (amount * (rate * 0.01)) / months;
      // Calculating total payment
      const total = ((amount / months) + interest).toFixed(2);
      return total
  }

  }
  loan2 = {
    "id": 2,
    "customerName": "Sahana",
    "phone": "2058873757",
    "address": "1717 s lemon street",
    "loanAmount": "2000",
    "intrest": "4",
    "loanTermYears": "5",
    "loanType":"business",
    "description":"loan amount required for business",
    "calculatedLoanAmount": function() {
      amount = Number(this.loanAmount)
      rate = Number(this.intrest)
      months = Number(this.loanTermYears)
      // Calculating interest per month
      const interest = (amount * (rate * 0.01)) / months;
      // Calculating total payment
      const total = ((amount / months) + interest).toFixed(2);
      return total
  }

  }
  loan3 = {
    "id": 3,
    "customerName": "Swetha",
    "phone": "2058873759",
    "address": "1050 s lemon street",
    "loanAmount": "450000",
    "intrest": "8.8",
    "loanTermYears": "120",
    "loanType":"education",
    "description":"loan amount required for education",
    "calculatedLoanAmount": function() {
      amount = Number(this.loanAmount)
      rate = Number(this.intrest)
      months = Number(this.loanTermYears)
      // Calculating interest per month
      const interest = (amount * (rate * 0.01)) / months;
      // Calculating total payment
      const total = ((amount / months) + interest).toFixed(2);
      return total
  }

  }
  loan4 =
  {
    "id": 4,
    "customerName": "Koushik",
    "phone": "2058875737",
    "address": "2050 e anankola street",
    "loanAmount": "5000",
    "intrest": "4",
    "loanTermYears": "5",
    "loanType":"home loan",
    "description":"loan amount required for home",
    "calculatedLoanAmount": function() {
      amount = Number(this.loanAmount)
      rate = Number(this.intrest)
      months = Number(this.loanTermYears)
      // Calculating interest per month
      const interest = (amount * (rate * 0.01)) / months;
      // Calculating total payment
      const total = ((amount / months) + interest).toFixed(2);
      return total
  }

  }
  loan5 =
  {
    "id": 5,
    "customerName": "Aman",
    "phone": "2083374046",
    "address": "6078 n pioria street",
    "loanAmount": "8000",
    "intrest": "4",
    "loanTermYears": "5",
    "loanType":"education",
    "description":"loan amount required for education",
    "calculatedLoanAmount": function() {
        amount = Number(this.loanAmount)
        rate = Number(this.intrest)
        months = Number(this.loanTermYears)
        // Calculating interest per month
        const interest = (amount * (rate * 0.01)) / months;
        // Calculating total payment
        const total = ((amount / months) + interest).toFixed(2);
        return total
    }
  }
  loans.push(loan1)
  loans.push(loan2)
  loans.push(loan3)
  loans.push(loan4)
  loans.push(loan5)

loans.forEach((items)=> console.log(items.calculatedLoanAmount()))