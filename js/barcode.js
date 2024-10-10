

  // Payment data
const paymentData = {
  labels: ['Card', 'Cash', 'Other'],
  datasets: [{
      data: [10000, 8000, 6456], // Corresponding amounts
      backgroundColor: [
          '#007bff', // Card
          '#28a745', // Cash
          '#ffc107'  // Other
      ],
      hoverOffset: 4
  }]
};

// Configuring and rendering the pie chart
const ctx = document.getElementById('paymentChart').getContext('2d');
const paymentChart = new Chart(ctx, {
  type: 'pie',
  data: paymentData,
  options: {
      responsive: true,
      plugins: {
          legend: {
              display: true,
              position: 'top',
          },
          title: {
              display: true,
              text: 'Payment Types Distribution'
          }
      }
  }
});

menuItems.forEach(item => {
  item.addEventListener('click', function (event) {
      event.preventDefault();
      const selectedMenu = event.target.id;

      // Load the corresponding HTML page into the content area
      $.ajax({
          url: `${selectedMenu}.html`,
          method: 'GET',
          success: function(data) {
              contentArea.innerHTML = data; // Load the new content
          },
          error: function(xhr, status, error) {
              console.error('Error loading page:', error);
          }
      });
  });
});
