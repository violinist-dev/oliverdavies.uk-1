#!/usr/bin/env php

<?php

$template = <<<EOS
---
layout: redirect
destination: %DESTINATION%
---

EOS;

$filename = dirname(__FILE__) . '/redirects.csv';

$row = 0;

if (($handle = fopen($filename, 'r')) !== FALSE) {
    while (($data = fgetcsv($handle, filesize($filename))) !== FALSE) {
        $row++;

        if ($row > 1) {
            $templateData = [
                '%DESTINATION%' => $data[1],
            ];

            $output = strtr($template, $templateData);
            file_put_contents("source/{$data[0]}.html", $output);

            echo "Written to {$data[0]}.html\n";
        }
    }
}

fclose($handle);
