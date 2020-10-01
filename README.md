# Splunk Links
Add link to splunk event results

<img width="256" alt="Demo of Splunk links" src="https://user-images.githubusercontent.com/4406751/94783100-32610c80-039a-11eb-972a-5ad5ee27f41f.png">

## How to install
1. Download the [extension](https://github.com/jusleg/splunk-links/archive/main.zip)

2. Open the **Extensions** page (chrome://extensions/) in your browser and turn on the **Developer mode**

3. Click on **Load unpacked** and select the directory of the extension
![image](https://user-images.githubusercontent.com/4406751/94782742-aa7b0280-0399-11eb-9a75-74f0f416c33d.png)


## How to configure

![Configuration screen](https://user-images.githubusercontent.com/4406751/94783967-79033680-039b-11eb-8625-9237eb590e69.png)

1. Click on the splunk icon in your extension tray
2. Set the url or your splunk instance. You can also use a regex in case you deal with multiple instances.
3. Set the mapping for link extraction. The keys should be the splunk keys you wish to have a link and the value is the url with the splunk value interpolated in it. Use `{value}` in the url to get it replaced by the capture value.
4. Save your mapping

## How to use
Once your results are loaded, click on the link icon in the bottom right corner of you browser. All the extracted links should appear.

<img width="150" alt="Link icon" src="https://user-images.githubusercontent.com/4406751/94784751-9dabde00-039c-11eb-9194-1c2073437143.png">

## License

This project is licensed under the [MIT License](https://github.com/jusleg/splunk-links/blob/master/LICENSE).
