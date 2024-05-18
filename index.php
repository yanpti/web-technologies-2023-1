<?php
//1
$a = -100;
$b = -55;

if ($a >= 0 && $b >= 0) {
    echo $a - $b;
} elseif ($a < 0 && $b < 0) {
    echo $a * $b;
} elseif (($a < 0 && $b >= 0) || ($a >= 0 && $b < 0)) {
    echo $a + $b;
}

//2
echo '<hr/>';
$a = 14;

switch ($a <= 15 && $a > 0) {
    case true:
        for (; $a <= 15; $a++) {
            echo $a;
        }
        break;
    case false:
        return;
}

//3
$a = 5;
$b = 10;
echo '<hr/>';
function addition($a, $b)
{
    return $a + $b;
}

function subtraction($a, $b)
{
    return $a - $b;
}

function multiplication($a, $b)
{
    return $a * $b;
}

function division($a, $b)
{
    return $a / $b;
}

echo 'Сложение ' . addition($a, $b) . '<br/>';
echo 'Вычитание ' . subtraction($a, $b) . '<br/>';
echo 'Умножение ' . multiplication($a, $b) . '<br/>';
echo 'Деление ' . division($a, $b) . '<br/>';

//4
echo '<hr/>';
function mathOperation($arg1, $arg2, $operation)
{
    switch ($operation) {
        case 'addition':
            return addition($arg1, $arg2);
        case 'subtraction':
            return subtraction($arg1, $arg2);
        case 'multiplication':
            return multiplication($arg1, $arg2);
        case 'division':
            return division($arg1, $arg2);
    }
}

echo mathOperation($a, $b, 'addition');
//6
echo '<hr/>';
function power($val, $pow) {
    if ($pow == 1) {
        return $val;
    }
    elseif ($pow > 0){
        return  $val * power($val, $pow - 1);
    }
}

echo power(2, 5);
echo '<hr/>';
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Lesson17</title>
</head>
<body>
<p><?php echo date('Y'); ?></p>
<?php require('site.php') ?>
<?php
$year = date('Y');
$content = file_get_contents('site.html');
$content = str_replace('{{ year }}', $year, $content);
echo $content; ?>
</body>
</html>