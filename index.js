/* global Chart, axios */

function gitRepoRequest(url) {
  return axios
    .get(url)
    .then(function (response) {
      // handle success
      // console.log(response.data);
      let counts = {};
      counts.stars = response.data.stargazers_count;
      counts.watchers = response.data.watchers_count;
      counts.forks = response.data.forks_count;
      return counts;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  // .then(function () {
  //   // always executed;
  // });
}

function makeChart(repoData1, repoData2, repoData3, repoData4, repoData5) {
  var ctx = document.getElementById("myChart1").getContext("2d");
  var myChart1 = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        "VUE Stars",
        "VUE Watchers",
        "VUE Forks",
        "ANGULAR Stars",
        "ANGULAR Watchers",
        "ANGULAR Forks",
        "EMBER Stars",
        "EMBER Watchers",
        "EMBER Forks",
        "SVELTE Stars",
        "SVELTE Watchers",
        "SVELTE Forks",
        "REACT Stars",
        "REACT Watchers",
        "REACT Forks",
      ],
      datasets: [
        {
          label: "# of Stars, Watchers and Forks",
          data: [
            repoData1.stars,
            repoData1.watchers,
            repoData1.forks,
            repoData2.stars,
            repoData2.watchers,
            repoData2.forks,
            repoData3.stars,
            repoData3.watchers,
            repoData3.forks,
            repoData4.stars,
            repoData4.watchers,
            repoData4.forks,
            repoData5.stars,
            repoData5.watchers,
            repoData5.forks,
          ],
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
}

async function renderData() {
  let vueData = await gitRepoRequest("https://api.github.com/repos/vuejs/vue");
  let angularData = await gitRepoRequest("https://api.github.com/repos/angular/angular.js");
  let emberData = await gitRepoRequest("https://api.github.com/repos/emberjs/ember.js");
  let svelteData = await gitRepoRequest("https://api.github.com/repos/sveltejs/svelte");
  let reactData = await gitRepoRequest("https://api.github.com/repos/facebook/react");
  makeChart(vueData, angularData, emberData, svelteData, reactData);
}

renderData();

// axios
//   .get("https://api.github.com/repos/angular/angular.js")
//   .then(function (response) {
//     // handle success
//     console.log(response.data);
//     let stars = response.data.stargazers_count;
//     let watchers = response.data.watchers_count;
//     let forks = response.data.forks_count;
//     console.log("Stars: ", stars);
//     console.log("Watchers: ", watchers);
//     console.log("Forks: ", forks);
//     var ctx = document.getElementById("myChart2").getContext("2d");
//     var myChart2 = new Chart(ctx, {
//       type: "bar",
//       data: {
//         labels: ["Stars", "Watchers", "Forks"],
//         datasets: [
//           {
//             label: "ANGULAR: # of Stars, Watchers and Forks",
//             data: [stars, watchers, forks],
//             backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)"],
//             borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)"],
//             borderWidth: 1,
//           },
//         ],
//       },
//       options: {
//         scales: {
//           y: {
//             beginAtZero: true,
//           },
//         },
//       },
//     });
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });

// axios
//   .get("https://api.github.com/repos/emberjs/ember.js")
//   .then(function (response) {
//     // handle success
//     console.log(response.data);
//     let stars = response.data.stargazers_count;
//     let watchers = response.data.watchers_count;
//     let forks = response.data.forks_count;
//     console.log("Stars: ", stars);
//     console.log("Watchers: ", watchers);
//     console.log("Forks: ", forks);
//     var ctx = document.getElementById("myChart3").getContext("2d");
//     var myChart3 = new Chart(ctx, {
//       type: "bar",
//       data: {
//         labels: ["Stars", "Watchers", "Forks"],
//         datasets: [
//           {
//             label: "EMBER: # of Stars, Watchers and Forks",
//             data: [stars, watchers, forks],
//             backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)"],
//             borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)"],
//             borderWidth: 1,
//           },
//         ],
//       },
//       options: {
//         scales: {
//           y: {
//             beginAtZero: true,
//           },
//         },
//       },
//     });
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });

// axios
//   .get("https://api.github.com/repos/sveltejs/svelte")
//   .then(function (response) {
//     // handle success
//     console.log(response.data);
//     let stars = response.data.stargazers_count;
//     let watchers = response.data.watchers_count;
//     let forks = response.data.forks_count;
//     console.log("Stars: ", stars);
//     console.log("Watchers: ", watchers);
//     console.log("Forks: ", forks);
//     var ctx = document.getElementById("myChart4").getContext("2d");
//     var myChart4 = new Chart(ctx, {
//       type: "bar",
//       data: {
//         labels: ["Stars", "Watchers", "Forks"],
//         datasets: [
//           {
//             label: "SVELTE: # of Stars, Watchers and Forks",
//             data: [stars, watchers, forks],
//             backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)"],
//             borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)"],
//             borderWidth: 1,
//           },
//         ],
//       },
//       options: {
//         scales: {
//           y: {
//             beginAtZero: true,
//           },
//         },
//       },
//     });
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });

// axios
//   .get("https://api.github.com/repos/facebook/react")
//   .then(function (response) {
//     // handle success
//     console.log(response.data);
//     let stars = response.data.stargazers_count;
//     let watchers = response.data.watchers_count;
//     let forks = response.data.forks_count;
//     console.log("Stars: ", stars);
//     console.log("Watchers: ", watchers);
//     console.log("Forks: ", forks);
//     var ctx = document.getElementById("myChart5").getContext("2d");
//     var myChart5 = new Chart(ctx, {
//       type: "bar",
//       data: {
//         labels: ["Stars", "Watchers", "Forks"],
//         datasets: [
//           {
//             label: "REACT: # of Stars, Watchers and Forks",
//             data: [stars, watchers, forks],
//             backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)"],
//             borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)"],
//             borderWidth: 1,
//           },
//         ],
//       },
//       options: {
//         scales: {
//           y: {
//             beginAtZero: true,
//           },
//         },
//       },
//     });
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });
