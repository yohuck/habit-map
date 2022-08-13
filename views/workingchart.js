let data = {
1: {date: '2022-08-02T00:00:00.000Z', completed: true, habit_id: 1, },
2: {date: '2022-08-03T00:00:00.000Z', completed: true, habit_id: 1, },
3: {date: '2022-08-04T00:00:00.000Z', completed: true, habit_id: 1},
4: {date: '2022-08-04T00:00:00.000Z', completed: true, habit_id: 1, },
5: {date: '2022-08-04T00:00:00.000Z', completed: true, habit_id: 1, },
6: {date: '2022-08-05T00:00:00.000Z', completed: true, habit_id: 1},
7: {date: '2022-08-05T00:00:00.000Z', completed: true, habit_id: 1, },
8: {date: '2022-08-04T00:00:00.000Z', completed: true, habit_id: 1, },
9: {date: '2022-08-02T00:00:00.000Z', completed: true, habit_id: 1},
10: {date: '2022-08-07T00:00:00.000Z', completed: true, habit_id: 1, },
11: {date: '2022-08-05T00:00:00.000Z', completed: true, habit_id: 1, },
12: {date: '2022-08-09T00:00:00.000Z', completed: true, habit_id: 1},
13: {date: '2022-08-07T00:00:00.000Z', completed: true, habit_id: 1, },
14: {date: '2022-08-03T00:00:00.000Z', completed: true, habit_id: 1, },
15: {date: '2022-08-02T00:00:00.000Z', completed: true, habit_id: 1},
}

<head>
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript">
  google.charts.load("current", {packages:["corechart"]});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Dinosaur', 'Length'],
      ['Acrocanthosaurus (top-spined lizard)', 12.2],
      ['Albertosaurus (Alberta lizard)', 9.1],
      ['Allosaurus (other lizard)', 12.2],
      ['Apatosaurus (deceptive lizard)', 22.9],
      ['Archaeopteryx (ancient wing)', 0.9],
      ['Argentinosaurus (Argentina lizard)', 36.6],
      ['Baryonyx (heavy claws)', 9.1],
      ['Brachiosaurus (arm lizard)', 30.5],
      ['Ceratosaurus (horned lizard)', 6.1],
      ['Coelophysis (hollow form)', 2.7],
      ['Compsognathus (elegant jaw)', 0.9],
      ['Deinonychus (terrible claw)', 2.7],
      ['Diplodocus (double beam)', 27.1],
      ['Dromicelomimus (emu mimic)', 3.4],
      ['Gallimimus (fowl mimic)', 5.5],
      ['Mamenchisaurus (Mamenchi lizard)', 21.0],
      ['Megalosaurus (big lizard)', 7.9],
      ['Microvenator (small hunter)', 1.2],
      ['Ornithomimus (bird mimic)', 4.6],
      ['Oviraptor (egg robber)', 1.5],
      ['Plateosaurus (flat lizard)', 7.9],
      ['Sauronithoides (narrow-clawed lizard)', 2.0],
      ['Seismosaurus (tremor lizard)', 45.7],
      ['Spinosaurus (spiny lizard)', 12.2],
      ['Supersaurus (super lizard)', 30.5],
      ['Tyrannosaurus (tyrant lizard)', 15.2],
      ['Ultrasaurus (ultra lizard)', 30.5],
      ['Velociraptor (swift robber)', 1.8]]);

    var options = {
      title: 'Lengths of dinosaurs, in meters',
      legend: { position: 'none' },
    };

    var chart = new google.visualization.Histogram(document.getElementById('chart_div'));
    chart.draw(data, options);
  }
</script>