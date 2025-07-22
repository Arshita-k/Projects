# Employee Attrition and Performance Analysis

This project focuses on analyzing the IBM HR Analytics employee attrition and performance dataset to uncover key insights related to employee turnover and its correlation with performance metrics. The analysis involves data exploration, identification of significant trends, and the application of machine learning models to predict employee attrition.

## Key Findings

* **Attrition Rate:** Identified an attrition rate of **16.12%** within the dataset, indicating a notable proportion of employees leaving the organization.
* **Performance-Salary Correlation:** Discovered a strong positive correlation of **77%** between `Performance Rating` and `Percentage Salary Hike`, suggesting that higher performance ratings are significantly associated with larger salary increases.

## Classification Model Comparison

To predict employee attrition, various classification models were evaluated. The performance of the top models is summarized below:

* **Random Forest:** Achieved the highest accuracy among the tested models with **87.75%**. This model demonstrated robust performance in identifying employees at risk of attrition.
* **Logistic Regression:** Attained a respectable accuracy of **87.01%**, providing a solid baseline for attrition prediction.

## Technologies Used

* **Pandas:** For data manipulation and analysis.
* **NumPy:** For numerical operations.
* **Matplotlib:** For data visualization.
* **Scikit-learn:** For machine learning model implementation and evaluation.

## Google Colab Notebook

Explore the full analysis, code, and detailed methodology in the Google Colab notebook:
https://colab.research.google.com/drive/1D6_Qcr-TWudTpd_7OO5pmJMLI1Mjfxco?usp=sharing
