# Valentines with brother


Dear Brother

You are my true hero

You follow your dreams

I love you

Your little brother,

Kamuś

## inspirations
* my brother, lawyer, psycholgiest & artist [https://kawalowski.com/](https://kawalowski.com/)


## learnings
* indexes - databases - postgresql
  * indexes vs performance
    * improved query performance: indexes can significantly speed up data retrieval for SELECT queries, especially when filtering, sorting, or joining tables based on indexed columns.
    * trade-offs: while indexes enhance read performance, they can impact the speed of write operations due to the overhead of maintaining indexes during data modifications.
    * selection: choosing the right columns to index is crucial. Columns frequently used in WHERE clauses, JOIN conditions, and ORDER BY clauses are prime candidates for indexing.
    * maintenance: regular maintenance, such as index reorganization and rebuilding, is important to ensure optimal performance as data changes over time.
    * over-indexing: creating too many indexes can lead to diminishing returns and increased storage requirements.
  * indexes types of index access methods in postgresql
    * mostly in my cases we sue btree
    * [https://www.educative.io/answers/what-are-the-types-of-index-access-methods-in-postgresql](https://www.educative.io/answers/what-are-the-types-of-index-access-methods-in-postgresql)
    * [https://www.postgresql.org/docs/current/btree-behavior.html](https://www.postgresql.org/docs/current/btree-behavior.html)
   * add indexes in pycharm [https://www.jetbrains.com/help/pycharm/indexes.html#create-an-index](https://www.jetbrains.com/help/pycharm/indexes.html#create-an-index)



## finds
* PEV2 - A VueJS component to show a graphical vizualization of a PostgreSQL execution plan
  * [https://github.com/dalibo/pev2](https://github.com/dalibo/pev2)

  
## achievements
* SQL: get fkeys without indexes


```sql

SELECT c.conrelid::regclass AS "table",
       /* list of key column names in order */
       string_agg(a.attname, ',' ORDER BY x.n) AS columns,
       pg_catalog.pg_size_pretty(
          pg_catalog.pg_relation_size(c.conrelid)
       ) AS size,
       c.conname AS constraint,
       c.confrelid::regclass AS referenced_table
FROM pg_catalog.pg_constraint c
   /* enumerated key column numbers per foreign key */
   CROSS JOIN LATERAL
      unnest(c.conkey) WITH ORDINALITY AS x(attnum, n)
   /* name for each key column */
   JOIN pg_catalog.pg_attribute a
      ON a.attnum = x.attnum
         AND a.attrelid = c.conrelid
WHERE NOT EXISTS
        /* is there a matching index for the constraint? */
        (SELECT 1 FROM pg_catalog.pg_index i
         WHERE i.indrelid = c.conrelid
           /* it must not be a partial index */
           AND i.indpred IS NULL
           /* the first index columns must be the same as the
              key columns, but order doesn't matter */
           AND (i.indkey::smallint[])[0:cardinality(c.conkey)-1]
               OPERATOR(pg_catalog.@>) c.conkey)
  AND c.contype = 'f'
GROUP BY c.conrelid, c.conname, c.confrelid
ORDER BY pg_catalog.pg_relation_size(c.conrelid) DESC;

```



Thanks for reading this ❤️

Your little borther,
Kamuś
