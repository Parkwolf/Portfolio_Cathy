// Données de test
const languages = ["Anglais", "Français", "Espagnol", "Coréen"];
const proficiencyLevels = [100, 75, 50, 80];

// Configuration du graphique
const ctx = document.getElementById("languageChart").getContext("2d");
const languageChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: languages,
    datasets: [
      {
        label: "Niveau de compétence (%)",
        data: proficiencyLevels,
        backgroundColor: "rgba(75, 192, 192, 0.7)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  },
});
