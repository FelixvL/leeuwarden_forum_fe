<?php
  // 1. We halen gegevens op uit de URL-parameters
  $denaam = $_GET["denaamvandeboot"];
  $delengte = $_GET["lengte"];

  // Eventueel kun je de waarden echo’en voor debug:
  echo $denaam . " & " . $delengte;

  // 2. Databaseverbinding
  $servername = "forumpjedb.mysql.database.azure.com";
  $username = "felixadmin";
  $password = "uiop7890UIOP&*()";
  $dbname = "live_chat";

  $conn = new mysqli($servername, $username, $password, $dbname);

  // Check of de verbinding lukt
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }

  // 3. SQL-query voor toevoegen van data
  // Let op de kolomnamen in je table (hier: 'naamkapitein' en 'lengte')
  $sql = "INSERT INTO boot (naamkapitein, lengte)
          VALUES ('$denaam', '$delengte')";

  // 4. Voer de query uit en check of het gelukt is
  if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }

  // 5. Sluit de verbinding
  $conn->close();
?>