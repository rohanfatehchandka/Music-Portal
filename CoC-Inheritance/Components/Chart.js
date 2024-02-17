import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

// Bar Chart Component
function ChartComponent({ graph, total_delay }) {
  // Create a ref to hold the canvas element
  const chartRef = useRef(null);

  useEffect(() => {
    // Check if the canvas ref exists
    if (chartRef.current) {
      // Extract labels and data from the graph array
      const labels = graph.map((item) => item[0]);
      const data = graph.map((item) => item[1]);

      // Define styling options for the bar graph
      const customStyle = {
        backgroundColor: "transparent",
        borderColor: "transparent",
        fontFamily: "Open Sans",
        title: {
          display: true,
          text: "Total Delay is: " + total_delay,
        },
      };

      // If a previous chart exists, clear its data
      if (window.myChart) {
        window.myChart.data.labels = [];
        window.myChart.data.datasets = [];
        window.myChart.update();
      }

      // Create a new Chart.js instance using the canvas ref
      window.myChart = new Chart(chartRef.current, {
        type: "bar", // Set the chart type to bar
        data: {
          labels: labels, // Provide the labels for the chart
          datasets: [
            {
              label: "Delay in seconds", // Label for the data set
              data: data, // Provide the data values
              backgroundColor: "rgba(75, 192, 192, 0.2)", // Set background color
              borderColor: "rgba(75, 192, 192, 1)", // Set border color
              borderWidth: 1, // Set border width
            },
          ],
        },
        options: {
          indexAxis: "y", // Index the axis on the y-axis
          scales: {
            x: {
              title: {
                display: true, // Display the x-axis title
                text: "Delay in seconds", // Set the x-axis title text
              },
            },
          },
          plugins: {
            legend: {
              display: true, // Display the legend
              position: "bottom", // Position the legend at the bottom
            },
          },
          ...customStyle, // Apply custom styling options
        },
      });

      // Cleanup function to destroy the chart when the component unmounts
      return () => {
        if (window.myChart) {
          window.myChart.destroy();
        }
      };
    }
  }, [graph, total_delay]); // Only re-run the effect if graph or total_delay changes

  // Render the canvas element
  return <canvas ref={chartRef} width="400" height="200"></canvas>;
}

export default ChartComponent;