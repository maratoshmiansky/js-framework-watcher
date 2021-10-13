/* global Chart, axios */

axios
  .get("https://api.github.com/repos/vuejs/vue")
  .then(function (response) {
    // handle success
    console.log(response.data);
    let stars = response.data.stargazers_count;
    let watchers = response.data.watchers_count;
    let forks = response.data.forks_count;
    console.log("Stars: ", stars);
    console.log("Watchers: ", watchers);
    console.log("Forks: ", forks);
    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Stars", "Watchers", "Forks"],
        datasets: [
          {
            label: "# of Stars, Watchers and Forks",
            data: [stars, watchers, forks],
            backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)"],
            borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
