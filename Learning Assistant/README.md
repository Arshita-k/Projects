# Learning Assistant

A smart web application designed to enhance your learning experience by intelligently summarizing content and answering your queries based on the provided text. This assistant leverages powerful Natural Language Processing (NLP) models to deliver accurate and concise information, making learning more efficient and accessible.

## Features

* **Content Summarization:** It shortens long articles into easy-to-read summaries, allowing to grasp key information quickly. Powered by the advanced **Hugging Face BART-large-CNN** model, known for its strong abstractive summarization capabilities.
* **Contextual Question Answering:** Get precise answers to your questions directly from the uploaded or provided content. Our assistant utilizes the robust **Hugging Face RoBERTa-base-SQuAD2** model, fine-tuned for extractive question answering on the SQuAD 2.0 dataset, ensuring highly accurate responses.
* **Intuitive Web Interface:** A user-friendly and responsive web interface for seamless interaction, allowing easy input of text and display of summaries and answers.

## How it Works

The core of this learning assistant lies in its integration with state-of-the-art Hugging Face NLP models:
1.  **Text Input:** Users can input text directly into the web application.
2.  **Summarization Pipeline:**
    * The provided text is sent to the `BART-large-CNN` model.
    * This model, pre-trained on a massive dataset and fine-tuned for summarization, generates an abstractive summary, capturing the essence of the original content.
3.  **Question Answering Pipeline:**
    * When a user asks a question, the question along with the input text (or its summary, depending on implementation) is fed to the `RoBERTa-base-SQuAD2` model.
    * This model, trained specifically for extractive QA, identifies and extracts the most relevant span of text from the content that answers the question.

## Screenshots & Usage Steps
 * First Window that helps Summarize the content and generate important points.

![Screenshot 2024-07-05 144659](https://github.com/Arshita-k/Projects/assets/122286846/c6b38d85-bdf4-431a-b3a4-fe7452715c4d)


* Enter your content in the first box

![Screenshot 2024-07-05 144730](https://github.com/Arshita-k/Projects/assets/122286846/57e89d5e-2ec9-459b-8dfe-47a388b5fb35)


* Click on Summarise button which changes color when selected and wait for a few seconds 

![Screenshot 2024-07-05 144746](https://github.com/Arshita-k/Projects/assets/122286846/2cb0a2b1-a5fb-4605-9d67-c1f2946e773c)


* Summary of the content is generated in the Result Box

![Screenshot 2024-07-05 144820](https://github.com/Arshita-k/Projects/assets/122286846/754ae2ca-2aff-4b44-87fa-b13a6273fce6)


* Second Sliding Window To generate answers of questions asked by the user based on the content entered

![Screenshot 2024-07-05 145943](https://github.com/Arshita-k/Projects/assets/122286846/63b39bcd-a4ab-44c8-baaf-2ac259660e5c)


* Enter the content and question in the specific box and click on answer to generate answers

<img width="1539" height="936" alt="image" src="https://github.com/user-attachments/assets/25e6e372-18f3-4aa3-83da-68fe4c0de121" />

