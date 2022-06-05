#!/bin/bash
dialog --yesno 'Начать установку?' 10 50;
response=$?;
case $response in
	0) dialog --yesno 'Начать установку apache?' 10 50;
	response1=$?;
	if [[ $response1 = "0" ]]
	then
	dialog --infobox 'Грузим вагоны и apache' 10 50;
	sleep 2;
	yes Y | sudo apt update;
	yes Y | sudo apt install apache2;
	sudo service apache2 start;
	fi
	dialog --yesno 'Загрузить самый красивый сайт?' 10 50;
	response2=$?;
	if [[ $response2 ="0" ]]
	then
	dialog --infobox 'Установка сайта' 10 50;\
	sleep 2;
	yes Y | unzip IST-912_KuzimovMA_project.zip -d /tmp;
	sudo cp -R /tmp/IST-912_KuzimovMA_project/* /var/www/html;
	rm -r /tmp/IST-912_KuzimovMA_project;
	chmod u+x IST-912_KuzimovMA_project;
	dialog --msgbox 'Установка завершена' 10 50;
	fi;;
	1) dialog --infobox 'Закрытие инстолятора' 10 50;sleep2;;
	255) dialog --infobox 'Закрытие инстолятора' 10 50;sleep2;;
esac
