<html>

<head>
    <link rel="stylesheet" href="./assets/style.css" /> 
</head>

<body>
    <?php
    $host = "localhost";
    $port = "5432"; 
    $user = "postgres"; 
    $password = "1234"; 
    $dbname = "Catalog";
    $dsn = "pgsql:host=$host;port=$port;dbname=$dbname";
    $options = array(
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
    );

    try {
        $pdo = new PDO($dsn, $user, $password, $options);

        $query = $pdo->prepare("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'products'");
        $query->execute();
        if ($query->rowCount() == 0) {
            
            $query = $pdo->prepare("CREATE TABLE products (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                description TEXT NOT NULL,
                price NUMERIC(10, 2) NOT NULL,
                image VARCHAR(255) NOT NULL
            )");
            $query->execute();

            $query = $pdo->prepare("CREATE TABLE reviews (
                id SERIAL PRIMARY KEY,
                product_id INTEGER NOT NULL REFERENCES products(id),
                author VARCHAR(255) NOT NULL,
                text TEXT NOT NULL
            )");
            $query->execute();

            $query = $pdo->prepare("INSERT INTO products (name, description, price, image) VALUES
                ('Овощ', 'Огурцы', 150.99, 'огурцы.jpg'),
                ('Овощ', 'Перцы', 270.99, 'перец.jpg'),
                ('Овощ', 'Помидоры', 390.99, 'помидоры.jpg')");
            $query->execute();

            $query = $pdo->prepare("INSERT INTO reviews (product_id, author, text) VALUES
                (1, 'Алексей', 'Отличный товар!'),
                (1, 'Александр', 'Всё супер!'),
                (2, 'Виталий', 'Очень вкусно'),
                (3, 'Василиса', 'Беру не в первый раз, всё хорошо')");
            $query->execute();
        }

    } catch (PDOException $e) {
        echo "Ошибка соединения с базой данных: " . $e->getMessage();
    }

    if (!isset($_GET['id'])) {
        $stmt = $pdo->prepare("SELECT * FROM products");
        $stmt->execute();
        $products = $stmt->fetchAll(PDO::FETCH_ASSOC);

        echo "<h1>Каталог товаров:</h1>";
        foreach ($products as $product) {
            echo "
                <div class='product'>
                    <img width='200' height='200' src='images/{$product['image']}' alt='{$product['name']}' />
                    <h2>{$product['name']}</h2>
                    <p>{$product['description']}</p>
                    <p>Цена: ₽ {$product['price']}</p>
                    <a href='?id={$product['id']}'>Узнать больше...</a>
                </div>";
        }
    }

    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        try {
            $query = $pdo->prepare('INSERT INTO reviews (product_id, author, text) VALUES (:product_id, :author, :text)');
            $query->bindParam(':product_id', $_POST['product_id'], PDO::PARAM_INT);
            $query->bindParam(':author', $_POST['author'], PDO::PARAM_STR);
            $query->bindParam(':text', $_POST['text'], PDO::PARAM_STR);

            $query->execute();
        } catch (Exception $e) {
            echo $e->getMessage();
        }
    }

    if (isset($_GET['id'])) {
        $id = $_GET['id'];
        $stmt = $pdo->prepare("SELECT * FROM products WHERE id=:id");
        $stmt->bindParam(':id', $id);
        $stmt->execute();
        $product = $stmt->fetch(PDO::FETCH_ASSOC);

        echo "<h1>{$product['name']}</h1>";
        echo "<img width='300' height='300' src='images/{$product['image']}' alt='{$product['name']}' />";
        echo "<p>{$product['description']}</p>";
        echo "<p>Price: \${$product['price']}</p>";

        $stmt = $pdo->prepare("SELECT * FROM reviews WHERE product_id=:id");
        $stmt->bindParam(':id', $id);
        $stmt->execute();
        $reviews = $stmt->fetchAll(PDO::FETCH_ASSOC);

        echo "<h2>Отзывы:</h2>";
        if (count($reviews) == 0) {
            echo "<p>Никто не оставил отзыв.</p>";
        } else {
            foreach ($reviews as $review) {
                echo "<div class='review'>";
                echo "<p>{$review['text']}</p>";
                echo "<p>Автор: {$review['author']}</p>";
                echo "</div>";
            }
        }

        echo "<h2>Оставить отзыв</h2>
            <form method='POST' action='?id={$_GET['id']}'>
                <input type='hidden' name='product_id' value='{$_GET['id']}' />
                <label>Имя:</label><br />
                <input type='text' name='author' /><br />
                <label>Оставить комментарий:</label><br />
                <textarea name='text'></textarea><br />
                <input type='submit' value='Отправить' />
            </form>";
    }

    $pdo = null;
    ?>
</body>

</html>