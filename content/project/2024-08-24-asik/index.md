+++
draft = false
featured = true
title = 'ASIK - '
slug = 'aplikasi-slip-gaji-elektronik'
date = 2024-08-24
categories = ['Python', 'PyPI', 'Tkinter', 'Jinja', 'Pandas', 'GithubActions']
summary = 'A Python GUI Application to generate employee salary slip.'
+++

ASIK is a Python GUI Application that generates employee monthly salary slip.

### Features

1. Automated PDF Generation: Reads employee data from a CSV file and creates personalized salary slips in PDF format.
2. GUI Powered by tkinter: Offers an interactive GUI that simplifies user interaction and enhances usability.
3. Automatic Email Distribution: Capable of automatically sending generated PDF salary slips to employees via email.



## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

### Installation

1. Coming
2. Soon



## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

```python
import tkinter as tk
from tkinter import filedialog

# Function to open file dialog and select a file
def select_file():
    file_path = filedialog.askopenfilename()
    if file_path:
        selected_file.set(file_path)

# Function to print the selected file path
def print_selected_file():
    print(selected_file.get())

# Create the main window
root = tk.Tk()
root.title("File Selector App")

# Variable to store the selected file path
selected_file = tk.StringVar()

# Create and place the widgets
frame = tk.Frame(root, padx=10, pady=10)
frame.pack(padx=10, pady=10)

select_button = tk.Button(frame, text="Select File", command=select_file)
select_button.pack(side=tk.LEFT, padx=5)

process_button = tk.Button(frame, text="Process", command=print_selected_file)
process_button.pack(side=tk.LEFT, padx=5)

file_label = tk.Label(frame, textvariable=selected_file, wraplength=300, anchor="w")
file_label.pack(fill=tk.BOTH, expand=True)

# Start the Tkinter event loop
root.mainloop()

```

_For more examples, please refer to the [Documentation](https://example.com)_



## Roadmap

- [ ] Add GUI
- [ ] Send to e-mail feature
- [ ] Store user setting in JSON

See the [open issues](https://github.com/odhyp/asik/issues) for a full list of proposed features (and known issues).



## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this app better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/your-feature`)
3. Commit your Changes (`git commit -m 'feat: add some your feature'`)
4. Push to the Branch (`git push origin feature/your-feature`)
5. Open a Pull Request



## License

Distributed under the MIT License. See `LICENSE.txt` for more information.



## Contact

Odhy Pradhana - pradhana.odhy@gmail.com

[![gmail][gmail-shield]][gmail-url]
[![linkedin][linkedin-shield]][linkedin-url]
[![twitter][twitter-shield]][twitter-url]



## Acknowledgements

* [Benedek Dévényi](https://github.com/rdbende) for [Forest theme for ttk](https://github.com/rdbende/Forest-ttk-theme)



<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/odhyp/asik.svg?style=for-the-badge
[contributors-url]: https://github.com/odhyp/asik/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/odhyp/asik.svg?style=for-the-badge
[forks-url]: https://github.com/odhyp/asik/network/members
[stars-shield]: https://img.shields.io/github/stars/odhyp/asik.svg?style=for-the-badge
[stars-url]: https://github.com/odhyp/asik/stargazers
[issues-shield]: https://img.shields.io/github/issues/odhyp/asik.svg?style=for-the-badge
[issues-url]: https://github.com/odhyp/asik/issues
[gmail-shield]: https://img.shields.io/badge/gmail-white?style=for-the-badge&logo=gmail&logoColor=%23EA4335
[gmail-url]: mailto:pradhana.odhy@gmail.com
[license-shield]: https://img.shields.io/github/license/odhyp/asik.svg?style=for-the-badge
[license-url]: https://github.com/odhyp/asik/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/odhy-pradhana
[twitter-shield]: https://img.shields.io/badge/twitter-%23000000?style=for-the-badge&logo=x&logoColor=white
[twitter-url]: https://x.com/valgtreiz
[python]: https://img.shields.io/badge/python-%233776AB?style=for-the-badge&logo=python&logoColor=white