<?php
    function first(){
        $i = 0;
        do {
            if ($i == 0) {
            echo "0 - это ноль.<br>";
            }
            elseif ($i % 2 == 0) {
            echo "$i - чётное число.<br>";
            }
            else {
            echo "$i - нечётное число.<br>";
            }
            $i++;
        } while ($i <= 10);
    }

    function second(){
        $regions = array(
          "Московская область" => array("Москва", "Зеленоград", "Клин"),
          "Ленинградская область" => array("Санкт-Петербург", "Всеволожск", "Павловск", "Кронштадт"),
          "Рязанская область" => array("Рязань", "Касимов", "Скопин", "Рыбное", "Сасово")
        );
        
        foreach ($regions as $region => $cities) {
          echo $region . ":<br>";
          echo implode(", ", $cities) . ".<br>";
        }        
    }

    function fifth() {
        $regions = array(
            "Московская область" => array("Москва", "Зеленоград", "Клин"),
            "Ленинградская область" => array("Санкт-Петербург", "Всеволожск", "Павловск", "Кронштадт"),
            "Рязанская область" => array("Рязань", "Касимов", "Скопин", "Рыбное", "Сасово")
        );
    
        foreach ($regions as $region => $cities) {
            
            $filteredCities = array_filter($cities, function($city) {
                return mb_substr($city, 0, 1) === "К";
            });
    
            
            if (!empty($filteredCities)) {
                echo $region . ":<br>";
                echo implode(", ", $filteredCities) . ".<br>";
            }
        }
    }
    
?>



<html>
    <head>
        <meta charset="utf-8">
    </head>
    <body>
        <p><?php first() ?></p>
        <p><?php second() ?></p>
        <p><?php fifth() ?></p>

        <div>
            <?php
            function translit($str)
            {
                $translit = [
                    'а' => 'a',
                    'б' => 'b',
                    'в' => 'v',
                    'г' => 'g',
                    'д' => 'd',
                    'е' => 'e',
                    'ё' => 'yo',
                    'ж' => 'zh',
                    'з' => 'z',
                    'и' => 'i',
                    'й' => 'y',
                    'к' => 'k',
                    'л' => 'l',
                    'м' => 'm',
                    'н' => 'n',
                    'о' => 'o',
                    'п' => 'p',
                    'р' => 'r',
                    'с' => 's',
                    'т' => 't',
                    'у' => 'u',
                    'ф' => 'f',
                    'х' => 'h',
                    'ц' => 'ts',
                    'ч' => 'ch',
                    'ш' => 'sh',
                    'щ' => 'sch',
                    'ъ' => '',
                    'ы' => 'y',
                    'ь' => '',
                    'э' => 'e',
                    'ю' => 'yu',
                    'я' => 'ya'
                ];

                $result = '';
                for ($i = 0; $i < mb_strlen($str); $i++) {
                    $char = mb_substr($str, $i, 1);

                    if (isset($translit[$char])) {
                        $result .= $translit[$char];
                    } else {
                        $result .= $char;
                    }
                }
                return $result;
            }

            echo translit("тесты");
            ?>
        </div>
        
        <div>
            <?php
                $menu = array(
                    "1",
                    "2",
                    "3" => array(
                    "3.1",
                    "3.2",
                    "3.3"
                    )
                );

                echo "<ul>";
                foreach ($menu as $key => $value) {
                if (is_array($value)) {
                    echo "<li>$key</li>";
                    echo "<ul>";
                    foreach ($value as $subkey => $subvalue) {
                    echo "<li>$subvalue</li>";
                    }
                    echo "</ul>";
                } else {
                    echo "<li>$value</li>";
                }
                }
                echo "</ul>";

                
            ?>
        </div>
    </body>
</html>