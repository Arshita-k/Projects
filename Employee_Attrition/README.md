# Employee Attrition and Performance Analysis
Attrition, in the context of organizational management, signifies the natural and ongoing reduction in a company's workforce over time. Employee atrrition occurs when an employee voluntarily leaves the organization, such as due to resignation, retirement, or any other circumstance. This may lead to a prolonged period of position vacancy until a replacement is hired, or the position itself might be eliminated as part of the organisation's restructuring efforts.

It impacts organizational stabilty, productivity, and overall employee satisfaction.

1. The global employee attrition rate has been on the rise. Between 2013 and 2021, it almost doubled, indicating a substantial shift in workforce dynamics

2. In 2023, 45% of employees reported feeling burned out due to organizational changes

This project focuses on analyzing the IBM HR Analytics employee attrition and performance dataset to uncover key insights related to employee turnover and its correlation with performance metrics. The analysis involves data exploration, identification of significant trends, and the application of machine learning models to predict employee attrition.

## Key Findings

* **Attrition Rate:** Identified an attrition rate of **16.12%** within the dataset, indicating a notable proportion of employees leaving the organization.
* **Performance-Salary Correlation:** Discovered a strong positive correlation of **77%** between `Performance Rating` and `Percentage Salary Hike`, suggesting that higher performance ratings are significantly associated with larger salary increases.
<p align="center">
  <img width="627" height="504" alt="image" src="https://github.com/user-attachments/assets/a0257dcb-8a8a-478f-8ba1-b1650af945c4" />
</p>


## Classification Model Comparison

To predict employee attrition, various classification models were evaluated. The performance of the top models is summarized below:

* **Random Forest:** Achieved the highest accuracy among the tested models with **87.75%**. This model demonstrated robust performance in identifying employees at risk of attrition.
* **Logistic Regression:** Attained a respectable accuracy of **87.01%**, providing a solid baseline for attrition prediction.
<p align="center">
<img  width="700" height="500" alt="image" src="https://github.com/user-attachments/assets/f8fb3c37-171a-47d7-9368-0e115f9b6824" />
</p>


## Technologies Used

* **Pandas:** For data manipulation and analysis.
* **NumPy:** For numerical operations.
* **Matplotlib:** For data visualization.
* **Scikit-learn:** For machine learning model implementation and evaluation.

## Google Colab Notebook

Explore the full analysis, code, and detailed methodology in the Google Colab notebook:
https://colab.research.google.com/drive/1D6_Qcr-TWudTpd_7OO5pmJMLI1Mjfxco?usp=sharing
