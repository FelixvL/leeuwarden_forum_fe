<?php
// CORS FILTER
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST');
    header("Access-Control-Allow-Headers: X-Requested-With");
// 1. Databaseverbinding maken
$servername = "forumpjedb.mysql.database.azure.com";
$username = "felixadmin";
$password = "uiop7890UIOP&*()";
$dbname = "live_chat";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check de verbinding
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// 2. SQL-query uitvoeren
$sql = "SELECT * FROM boot";
$result = $conn->query($sql);

// 3. Data verwerken tot JSON
if ($result->num_rows > 0) {
    $eindstring = "";
    while($row = $result->fetch_assoc()) {
        $eindstring .= "{";
        $eindstring .= " \"id\" : \"" . $row["id"]. "\", ";
        $eindstring .= " \"title\" : \"" . $row["title"]. "\", ";
        $eindstring .= " \"user\" : \"" . $row["user"]. "\", ";
        $eindstring .= " \"user_image\" : \"" . $row["user_image"]. "\", ";
        $eindstring .= " \"user_status\" : \"" . $row["user_status"]. "\", ";
        $eindstring .= " \"userlist\" : \"" . $row["userlist"]. "\", ";
        $eindstring .= " \"user_search\" : \"" . $row["user_search"]. "\", ";
        $eindstring .= " \"timestamp\" : \"" . $row["timestamp"]. "\", ";
        $eindstring .= " \"message\" : \"" . $row["message"]. "\", ";
        $eindstring .= " \"msg_reaction\" : \"" . $row["msg_reaction"]. "\", ";
        $eindstring .= " \"text_input\" : \"" . $row["text_input"]. "\", ";
        $eindstring .= " \"image\" : \"" . $row["image"]. "\", ";
        $eindstring .= " \"window_active\" : \"" . $row["window_active"]. "\"";
        $eindstring .= "},";
    }
    // Laatste komma weghalen
    $eindstring = substr($eindstring, 0, -1);
    echo $eindstring;
} else {
  echo "0 results";
}

// 4. Verbinding sluiten
$conn->close();
?>