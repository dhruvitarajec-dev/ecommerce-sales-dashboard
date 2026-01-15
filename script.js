const ctx = document.getElementById('salesChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Electronics', 'Fashion'],
    datasets: [{
      label: 'Sales by Category',
      data: [72500, 5000]
    }]
  }
});
