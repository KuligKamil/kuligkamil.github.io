# Plans are worthless, but planning is everything


![Plans-Reality-2](https://github.com/KuligKamil/kuligkamil.github.io/assets/13277748/c276e050-ba2f-4394-908b-36d678710fd6)




## ideas
* [work] ask about databricks & sqlalchemy
* [ml] do you eat healthy, recommend products, calories
  
## challenges
* [work][future][todo] Whether aAA needs new repo for his work or could be put to repo commons for pipelines?

## learnings
* parquet file could very compressed size
  * ~ 4_000_000 records to 40 MiB 
* [databricks]
  * External tables
    * [https://docs.databricks.com/en/sql/language-manual/sql-ref-external-tables.html](https://docs.databricks.com/en/sql/language-manual/sql-ref-external-tables.html)
  * Volumes = mount + per user management
    * [https://docs.databricks.com/en/sql/language-manual/sql-ref-volumes.html](https://docs.databricks.com/en/sql/language-manual/sql-ref-volumes.html)
  * Capture and view data lineage with Unity Catalog
    * [https://docs.databricks.com/en/data-governance/unity-catalog/data-lineage.html#examples](https://docs.databricks.com/en/data-governance/unity-catalog/data-lineage.html#examples)
  * Delta
    * [https://docs.databricks.com/en/introduction/delta-comparison.html](https://docs.databricks.com/en/introduction/delta-comparison.html)
* Delta Lake
  * Open source project that enables building a Lakehouse architecture on top of data lakes.
  * Provides ACID transactions, scalable metadata handling, and unifies streaming and batch data processing on top of existing data lakes, such as S3, ADLS, GCS, and HDFS.
  * (https://docs.delta.io/latest/quick-start.html#language-python)[https://docs.delta.io/latest/quick-start.html#language-python]
  * (https://docs.delta.io/latest/index.html)[https://docs.delta.io/latest/index.html]
* get schema from databrics catalog with Delta Lake

```python

DeltaTable.forName(spark, f"{source_schema}.{tableName}").toDF().schema

```

## finds
* Blog Peter Baumgartner https://www.peterbaumgartner.com/blog/
  * Ways I Use Testing as a Data Scientist [https://peterbaumgartner.com/blog/testing-for-data-science/](https://peterbaumgartner.com/blog/testing-for-data-science/)


Thanks for reading this ❤️

Love,

KK
