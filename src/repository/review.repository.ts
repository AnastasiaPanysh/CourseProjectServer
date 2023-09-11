import  pool  from "../DB";

async function getReviewDB() {
    const client =await pool.connect()
    const sql = 'SELECT * FROM courses'
    const result = (await client.query(sql)).rows
    return result
}

async function getReviewByIdDB(id) {
    const client = await pool.connect()
    const sql = 'SELECT * FROM reviews where id=$1'
    const result = (await client.query(sql, [id])).rows
    return result
}


async function createReviewDB(title) {
    const client =await pool.connect()
    try {
        await client.query('BEGIN')
        const sql = 'INSERT INTO reviews (title) VALUES ($1) RETURNING *'
        const result = (await client.query(sql, [title])).rows
        await client.query('COMMIT')
        return result
    } catch (error) {
        await client.query('ROLLBACK')
        console.log(`createCourseDB: error`);
        return []
    }
}

async function updateReviewDB(id,title) {
    const client =await pool.connect()
    try {
        await client.query('BEGIN')
        const sql = 'UPDATE reviews SET title=$1 WHERE id=$2 RETURNING *'
        const result = (await client.query(sql, [title,id])).rows
        await client.query('COMMIT')
        return result
    } catch (error) {
        await client.query('ROLLBACK')
        console.log(`createCourseDB: error`);
        return []
    }
}

async function deleteReviewDB(id) {
    const client = await pool.connect()
    try {
        await client.query('BEGIN')
        const sql = 'DELETE FROM reviews WHERE id=$1 RETURNING*'
        const result = (await client.query(sql, [id])).rows
        await client.query('COMMIT')
        return result
    } catch (error) {
        await client.query('ROLLBACK')
        console.log(`deleteUserDB: error`);
        return []
    }
}


export { getReviewDB,getReviewByIdDB, createReviewDB,updateReviewDB ,deleteReviewDB}