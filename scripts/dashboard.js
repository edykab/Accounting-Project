  // Get chart canvas elements
  const incomeCanvas = document.getElementById("incomeCanvas");
  const expenseCanvas = document.getElementById("expenseCanvas");

  // Sample data for income and expense
  const incomeData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [{
      label: "Income",
      data: [1500, 2000, 1800, 2200, 2500],
      backgroundColor: "rgba(75, 192, 192, 0.6)"
    }]
  };

  const expenseData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [{
      label: "Expenses",
      data: [800, 1000, 900, 1100, 1200],
      backgroundColor: "rgba(255, 99, 132, 0.6)"
    }]
  };

  // Creates income and expense charts
  const incomeChart = new Chart(incomeCanvas, {
    type: "bar",
    data: incomeData
  });

  const expenseChart = new Chart(expenseCanvas, {
    type: "bar",
    data: expenseData
  });


    // Sample financial records data
    const financialRecords = [
      { date: "2023-01-15", type: "Income", amount: 1500 },
      { date: "2023-02-05", type: "Expense", amount: 800 },

    ];

    // Gets the data table body
    const tableBody = document.querySelector("#dataTable tbody");

    // Populates the data table
    financialRecords.forEach(record => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${record.date}</td>
        <td>${record.type}</td>
        <td>$${record.amount}</td>
      `;
      tableBody.appendChild(row);
    });
