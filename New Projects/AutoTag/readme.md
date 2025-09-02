# AutoTag: AI-Powered Content-Based Filename Generation

> **An intelligent CLI tool that leverages AI to automatically rename files based on their content, not just their metadata.**

AutoTag is a **powerful command-line utility** designed to streamline digital organization. It automates the tedious task of file renaming by analyzing the **content of your files**—including images, videos, and documents—and generating a descriptive, human-readable filename using a large language model. This ensures your files are not just organized, but also searchable and intuitively named, saving you time and effort.

---

## ✨ Features

- **🧠 Intelligent Renaming**: Uses advanced multimodal AI models to generate highly accurate and descriptive filenames.
- **🖼️ Multimodal Support**: Processes and renames a wide range of file types, including **images (.jpg, .png)**, **videos (.mp4, .mov)**, and **documents (.pdf, .txt)**.
- **🔌 Flexible AI Providers**: Connects with a variety of providers, including **Ollama** (for local models), **OpenAI**, and **LM Studio**.
- **⚙️ Fully Customizable**: Allows you to define rules for generated names, including case format (`kebabCase`, `camelCase`), character limits, and custom prompts.
- **🚀 Automated Workflow**: Built as a robust CLI tool for batch processing and integration into automated scripts.

---

## 🏗️ Architecture



AutoTag's architecture is a modular pipeline designed for efficiency and scalability. It routes incoming files through a series of specialized components: a content extraction layer (for images, video frames, or text), an AI integration service, and a final renaming utility that ensures naming conventions and avoids conflicts. This ensures a reliable and consistent renaming process, from a single file to a large directory.

---

## 🚀 Getting Started

### 1️⃣ Installation & Setup

Make sure you have [Node.js](https://nodejs.org/) and [FFmpeg](https://ffmpeg.org/) installed.

### 2️⃣ Configure AI Provider

AutoTag supports local and cloud-based models.

Ahh I see the issue 👌 — in your original draft, the **code block wasn’t properly closed** before switching to the **OpenAI (Cloud)** section, so everything after got swallowed into one code block.

Here’s the **fixed version** with correct formatting and clean separation:

````markdown
# AutoTag: AI-Powered Content-Based Filename Generation

> **An intelligent CLI tool that leverages AI to automatically rename files based on their content, not just their metadata.**

AutoTag is a **powerful command-line utility** designed to streamline digital organization. It automates the tedious task of file renaming by analyzing the **content of your files**—including images, videos, and documents—and generating a descriptive, human-readable filename using a large language model. This ensures your files are not just organized, but also searchable and intuitively named, saving you time and effort.

---

## ✨ Features

- **🧠 Intelligent Renaming**: Uses advanced multimodal AI models to generate highly accurate and descriptive filenames.
- **🖼️ Multimodal Support**: Processes and renames a wide range of file types, including **images (.jpg, .png)**, **videos (.mp4, .mov)**, and **documents (.pdf, .txt)**.
- **🔌 Flexible AI Providers**: Connects with a variety of providers, including **Ollama** (for local models), **OpenAI**, and **LM Studio**.
- **⚙️ Fully Customizable**: Allows you to define rules for generated names, including case format (`kebabCase`, `camelCase`), character limits, and custom prompts.
- **🚀 Automated Workflow**: Built as a robust CLI tool for batch processing and integration into automated scripts.

---

## 🏗️ Architecture

AutoTag's architecture is a modular pipeline designed for efficiency and scalability. It routes incoming files through a series of specialized components:  

- A **content extraction layer** (for images, video frames, or text)  
- An **AI integration service** (local/cloud models)  
- A **renaming utility** that ensures naming conventions and avoids conflicts  

This ensures a reliable and consistent renaming process, from a single file to a large directory.

---

## 🚀 Getting Started

### 1️⃣ Installation & Setup

Make sure you have [Node.js](https://nodejs.org/) and [FFmpeg](https://ffmpeg.org/) installed.

### 2️⃣ Configure AI Provider

AutoTag supports both local and cloud-based models.

#### **Ollama (Local)**

```bash
# Pull a multimodal model like LLaVA
ollama pull llava

# Run the renamer, specifying the model
npx autotag my-folder --provider=ollama --model=llava
````

#### **OpenAI (Cloud)**

```bash
# Run with your API key and model
npx autotag my-folder --provider=openai --model=gpt-4o --apiKey=YOUR_API_KEY
```

---

## 📊 Performance Metrics

* **< 3 seconds** average time-to-rename for images and text files
* **\~95%** naming accuracy across diverse content types
* **\~2 minutes** to batch process and rename a directory of 50 images

---

## 🎯 Significance

AutoTag showcases the power of **local-first AI** and **DevOps principles** in personal productivity and digital asset management. This project demonstrates:

* **Intelligent Automation**: Eliminating manual effort through smart, context-aware processes
* **Scalability**: A modular design that can handle thousands of files in a single run
* **Provider Agnostic Design**: Seamless switching between local and cloud-based AI services
* **Robustness**: Built-in error handling for API calls and file system operations

---

## 🎥 Project Demo

Watch a short video demonstration of AutoTag in action:

<img src="https://via.placeholder.com/600x300.png?text=AutoTag+Demo" alt="AutoTag Demo Video" />

---

## 📌 Future Enhancements

* GUI or web interface for non-technical users
* Support for additional file types (e.g., audio, code files)
* Multi-language support for content analysis
* CI/CD pipeline integration for automated renaming of new files in a directory

---

## 🧑‍💻 Author

**\[Your Name Here]** — Software Engineer passionate about AI, automation, and building intelligent tools

📫 Reach me: \[Your LinkedIn Profile]

```

✅ Now everything after **Ollama (Local)** is properly formatted — code blocks close correctly, OpenAI section renders as intended, and the rest of the README displays normally.  

Do you want me to also add a **Table of Contents** at the top so it’s easier to navigate on GitHub?
```

