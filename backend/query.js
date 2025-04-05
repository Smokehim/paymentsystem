import express from 'express';
import mysql from 'mysql2';
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}))
const Port = 5000;
const db = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database:'payment'
})
app.listen(Port,()=>{
    console.log('Server is running on port ')
});

db.connect((result, error)=>{
    if(error){
        console.log("database connected",error)
    }else{
        console.log('Database connected', )
    }
})

app.get("/user", (req, res)=>{
    try {
        const sql = `SELECT * FROM Users`
        db.query(sql, (error,result)=>{
             if(error) return res.status(400).json({message: "not able to get users", error}); console.log("not able to get users", error)
             res.status(200).json({message: "here is your result", result});
             console.log("here is your result", result)
        })
        
    } catch (error) {
        res.status(500).json({message: "not able to connect to database", error});
        console.log("not able to connect to database", error)
    }
})
app.get('/user_id', (req,res)=>{
    try{
        console.log("Here is your query:", req.query);
        console.log("Here is your request params:", req.params);
    
        const { id } = req.body;
    
        if (isNaN(id)) {
            return res.status(400).json({ message: "Invalid ID format" });
        }
    
        const sql = `SELECT * FROM Users WHERE id = ?`;
        db.query(sql, [id], (error, result) => {
            if (error) {
                console.log("Not able to get user", error);
                return res.status(400).json({ message: "Not able to get user", error });
            }
            console.log("Here is your result", result);
            res.status(200).json({ message: "Here is your result", result });
        });
    }catch(error){
        res.status(500).json({message: "not able to connect to database", error});
        console.log("not able to connect to database", error)
    }

})
app.post("/post/user",(req, res)=>{
    try {
        const { name, email, phone, NRC_Number, role, password } = req.body;
        const sql  = `INSERT INTO Users (name, email, phone, NRC_Number, role, password) VALUES (?, ?, ?, ?, ?, ?)`;
        db.query(sql, [name, email, phone, NRC_Number, role, password], (error, result)=>{
            if(error) return res.status(400).json({message: "not able to post user", error}); console.log("not able to post user", error)
            if(result.affectedRows === 0) return res.status(404).json({message: "user not found"})
            res.status(200).json({message: "here is your result post", result});
            console.log("here is your result", result)
        })
        
    } catch (error) {
        console.log("not able to connect to database", error)
    }
})
app.put("/put/:id", (req, res)=>{
    const id = req.body.id
    if(!id) return res.status(400).json({message: "id is required"})
    const {name, email, phone, NRC_Number, role, password } =req.body
    const sql = `UPDATE Users SET name = COALESCE( ?, name), email = COALESCE( ?, email),
     phone = COALESCE( ?, phone), NRC_Number = COALESCE( ?, NRC_Number), 
     role = COALESCE( ?, role), password = COALESCE( ?, password) WHERE id=?`
     const values = [name, email, phone, NRC_Number, role, password, id]
    db.query(sql, values, (error, result)=>{
        if(error) return res.status(400).json({message: "not able to update user", error}); console.log("not able to update user", error)
        if(result.affectedRows === 0) return res.status(404).json({message: "user not found"})
        res.status(200).json({message: "here is your result put", result});
        console.log("here is your result put", result)
    })

})
app.delete("/delete/:id", (req, res)=>{
    const id = req.body.id
    const sql = `DELETE FROM Users WHERE id = ?`
    db.query(sql,[id], (error, result)=>{
        if(error) return res.status(400).json({message: "not able to delete user", error}); console.log("not able to delete user", error)
        if(result.affectedRows === 0) return res.status(404).json({message: "user not found"})
        res.status(200).json({message: "here is your result delete", result});
        console.log("here is your result delete", result)
    })
})
// user ends here

app.get("/payment", (req, res)=>{
    try {
        const sql = `SELECT * FROM paymentmethod`
        db.query(sql, (error,result)=>{
             if(error) return res.status(400).json({message: "not able to get paymentmethod", error}); console.log("not able to get payment", error)
             res.status(200).json({message: "here is your result get paymentmethod", result});
             console.log("here is your result paymentmethod", result)
        })
        
    } catch (error) {
        res.status(500).json({message: "not able to connect to database", error});
        console.log("not able to connect to database", error)
    }
})
app.get('/payment_id', (req,res)=>{
    try{
        console.log("Here is your query:", req.query);
        console.log("Here is your request params:", req.params);
    
        const { id } = req.body;
    
        if (isNaN(id)) {
            return res.status(400).json({ message: "Invalid ID format" });
        }
    
        const sql = `SELECT * FROM paymentmethod WHERE id = ?`;
        db.query(sql, [id], (error, result) => {
            if (error) {
                console.log("Not able to get paymentmethod", error);
                return res.status(400).json({ message: "Not able to get payment", error });
            }
            console.log("Here is your result payment", result);
            res.status(200).json({ message: "Here is your result  paymentmethod", result });
        });
    }catch(error){
        res.status(500).json({message: "not able to connect to database", error});
        console.log("not able to connect to database", error)
    }

})
app.post("/post/payment",(req, res)=>{
    try {
        const { name} = req.body;
        const sql  = `INSERT INTO paymentmethod (name) VALUES (?)`;
        db.query(sql, [name], (error, result)=>{
            if(error) return res.status(400).json({message: "not able to post paymentmethod", error}); console.log("not able to post paymentmethod", error)
            if(result.affectedRows === 0) return res.status(404).json({message: "user not found"})
            res.status(200).json({message: "here is your result post", result});
            console.log("here is your result", result)
        })
        
    } catch (error) {
        console.log("not able to connect to database", error)
    }
})
app.put("/put/payment:id", (req, res)=>{
    const id = req.body.id
    if(!id) return res.status(400).json({message: "id is required"})
    const {name} =req.body
    const sql = `UPDATE Users SET name = COALESCE( ?, name) WHERE id=?`
     const values = [name, id]
    db.query(sql, values, (error, result)=>{
        if(error) return res.status(400).json({message: "not able to update paymentmethod", error}); console.log("not able to update paymentmethod", error)
        if(result.affectedRows === 0) return res.status(404).json({message: "paymentmethod not found"})
        res.status(200).json({message: "here is your result put paymentmethod", result});
        console.log("here is your result put paymentmethod", result)
    })

})
app.delete("/delete/payment:id", (req, res)=>{
    const id = req.body.id
    const sql = `DELETE FROM paymentmethod WHERE id = ?`
    db.query(sql,[id], (error, result)=>{
        if(error) return res.status(400).json({message: "not able to delete user", error}); console.log("not able to delete user", error)
        if(result.affectedRows === 0) return res.status(404).json({message: "user not found"})
        res.status(200).json({message: "here is your result delete", result});
        console.log("here is your result delete", result)
    })
})
//payment ends here
app.get("/Wallets", (req, res)=>{
    try {
        const sql = `SELECT * FROM Wallets`
        db.query(sql, (error,result)=>{
             if(error) return res.status(400).json({message: "not able to get Wallets", error}); console.log("not able to get Wallets", error)
             res.status(200).json({message: "here is your result Wallets", result});
             console.log("here is your result Wallets", result)
        })
        
    } catch (error) {
        res.status(500).json({message: "not able to connect to database", error});
        console.log("not able to connect to database", error)
    }
})
app.get('/Wallets_id', (req,res)=>{
    try{
        console.log("Here is your query:", req.query);
        console.log("Here is your request params:", req.params);
    
        const { id } = req.body;
    
        if (!id) {
            return res.status(400).json({ message: "Invalid ID format" });
        }
    
        const sql = `SELECT * FROM Wallets WHERE id = ?`;
        db.query(sql, [id], (error, result) => {
            if (error) {
                console.log("Not able to get Wallets", error);
                return res.status(400).json({ message: "Not able to get Wallets", error });
            }
            console.log("Here is your result Wallets", result);
            res.status(200).json({ message: "Here is your result Wallets", result });
        });
    }catch(error){
        res.status(500).json({message: "not able to connect to database", error});
        console.log("not able to connect to database", error)
    }

})
app.post("/post/Wallets",(req, res)=>{
    try {
        const { user_id, balance, currency } = req.body;
        const getuser = `SELECT * FROM Users WHERE id = ?`;
        const sql  = `INSERT INTO Wallets (user_id, balance, currency) VALUES (?, ?, ?)`;
        db.query(getuser, [user_id], (error, userid)=>{
            console.log("Here is your user id", userid)
            if(error) return res.status(400).json({message: "not able to get user", error}); console.log("not able to get user", error)
            if(userid.length === 0) return res.status(404).json({message: "user not found"});

            db.query(sql, [user_id, balance, currency], (error, result)=>{
                if(error) return res.status(400).json({message: "not able to post Wallets", error}); console.log("not able to post Wallets", error)
                    if(result.affectedRows === 0) return res.status(404).json({message: "Wallets not found"})
                    res.status(200).json({message: "here is your result post Wallets", result});
                    console.log("here is your result Wallets", result)
            })
            
        })
        
    } catch (error) {
        console.log("not able to connect to database", error)
    }
})
app.put("/put/:id", (req, res)=>{
    const id = req.body.id
    if(!id) return res.status(400).json({message: "id is required"})
    const {name, email, phone, NRC_Number, role, password } =req.body
    const sql = `UPDATE Users SET name = COALESCE( ?, name), email = COALESCE( ?, email),
     phone = COALESCE( ?, phone), NRC_Number = COALESCE( ?, NRC_Number), 
     role = COALESCE( ?, role), password = COALESCE( ?, password) WHERE id=?`
     const values = [name, email, phone, NRC_Number, role, password, id]
    db.query(sql, values, (error, result)=>{
        if(error) return res.status(400).json({message: "not able to update user", error}); console.log("not able to update user", error)
        if(result.affectedRows === 0) return res.status(404).json({message: "user not found"})
        res.status(200).json({message: "here is your result put", result});
        console.log("here is your result put", result)
    })

})
app.delete("/delete/:id", (req, res)=>{
    const id = req.body.id
    const sql = `DELETE FROM Users WHERE id = ?`
    db.query(sql,[id], (error, result)=>{
        if(error) return res.status(400).json({message: "not able to delete user", error}); console.log("not able to delete user", error)
        if(result.affectedRows === 0) return res.status(404).json({message: "user not found"})
        res.status(200).json({message: "here is your result delete", result});
        console.log("here is your result delete", result)
    })
})













const database = 'CREATE DATABASE IF NOT EXISTS payment';
db.query(database,(error, result)=>{
    if(error){
        console.log('Database created', error)
    }else{
        console.log('Database created', result)
    }
})
 
 
     db.connect(()=> {
        const user = `CREATE TABLE IF NOT EXISTS Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(255) UNIQUE NOT NULL,
    NRC_Number VARCHAR(255) UNIQUE NOT NULL,
    role ENUM('admin', 'merchant', 'customer')  DEFAULT 'customer',
    password VARCHAR(255) NOT NULL)`;
       db.query(user, (error, result)=>{
        if(error) return console.error("not able to create table user", error.message)
        console.log("here is your result user", result)
       })
     })
     
     db.connect(()=> {
         const payments = `CREATE TABLE IF NOT EXISTS paymentmethod(id INT AUTO_INCREMENT PRIMARY KEY,
     name ENUM('Bank transfer', 'Paypal', 'Visa', 'Mobile Money', 'Electricity payment', 'Water payment', 'Internet payment') UNIQUE NOT NULL)`
            db.query(payments, (error, result)=>{
                if(error) return console.error("not able to create table payment", error.message)
                console.log("here is your result payment", result)
            })
    })
    
    db.connect(()=> {
        const wallets = `CREATE TABLE IF NOT EXISTS Wallets (
            id INT AUTO_INCREMENT PRIMARY KEY,
            user_id INT NOT NULL,
            balance DECIMAL(15,2) DEFAULT 0.00,
            currency VARCHAR(10) DEFAULT 'USD',
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE);`
            db.query(wallets, (error, result)=>{
                if(error) return console.error("not able to create table wallets", error.message)
                console.log("here is your wallets ", result)
            })
            
    })
    db.connect(()=> {
        const  banks = `CREATE TABLE IF NOT EXISTS Banks (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            account_number VARCHAR(50) UNIQUE NOT NULL,
            swift_code VARCHAR(20),
            currency VARCHAR(10) DEFAULT 'USD');`
            db.query(banks, (error, result)=>{
                if(error) return console.error("not able to create table", error.message)
                console.log("here is your bank ", result)
            })
    })
    db.connect(()=> {
        const electricity = `CREATE TABLE IF NOT EXISTS ElectricityProviders (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            provider_code VARCHAR(50) UNIQUE NOT NULL);`
            db.query(electricity, (error, result)=>{
                if(error) return console.error("not able to create electricity", error.message)
                console.log("here is your electricity ", result)
            })
    })
    db.connect(()=> {
        const waterProviders = `CREATE TABLE IF NOT EXISTS WaterProviders (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            provider_code VARCHAR(50) UNIQUE NOT NULL);`
            db.query(waterProviders, (error, result)=>{
                if(error) return console.error("not able to create table water", error.message)
                console.log("here is your water ", result)
            })
    })
    
    
    

   
   
db.connect(()=>{
    const mobileMoneyProviders = `CREATE TABLE IF NOT EXISTS MobileMoneyProviders (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        provider_code VARCHAR(50) UNIQUE NOT NULL);`
        db.query(mobileMoneyProviders, (error, result)=>{
            if(error) return console.error("not able to create table mobile", error.message)
            console.log("here is your mobile ", result)
        })
})


db.connect(()=>{
    const apikeyPayment = `CREATE TABLE IF NOT EXISTS APIKeys (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        api_key VARCHAR(100) UNIQUE NOT NULL,
        status ENUM('active', 'revoked') DEFAULT 'active',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE);`
        db.query(apikeyPayment, (error, result)=>{
            if(error) return console.error("not able to create table apikeyPayment", error.message)
            console.log("here is your apikeyPayment ", result)
        })
})
db.connect(()=>{
    const transctionDetails = `CREATE TABLE IF NOT EXISTS TransactionDetails (
        id INT AUTO_INCREMENT PRIMARY KEY,
        transaction_id INT NOT NULL,
        bank_id INT NULL,  
        electricity_provider_id INT NULL,  
        mobile_money_provider_id INT NULL,  
        account_number VARCHAR(50),  
        extra_info TEXT,  
        payment_id INT NULL,
        FOREIGN KEY (payment_id) REFERENCES Paymentmethod(id) ON DELETE SET NULL,
        FOREIGN KEY (transaction_id) REFERENCES Transaction(id) ON DELETE CASCADE,
        FOREIGN KEY (bank_id) REFERENCES Banks(id) ON DELETE SET NULL,
        FOREIGN KEY (electricity_provider_id) REFERENCES ElectricityProviders(id) ON DELETE SET NULL,
        FOREIGN KEY (mobile_money_provider_id) REFERENCES MobileMoneyProviders(id) ON DELETE SET NULL)`
        db.query(transctionDetails, (error, result)=>{
            if(error) return console.error("not able to create table transactionDetaials", error.message)
            console.log("here is your TranscationDetails ", result)
        })
})

    db.connect(()=>{
    const transctionLogs =`CREATE TABLE IF NOT EXISTS TransactionLogs (
        id INT AUTO_INCREMENT PRIMARY KEY,
        transaction_id INT NOT NULL,
        user_id INT NOT NULL,
        action ENUM('created', 'updated', 'deleted', 'reversed') NOT NULL,
        details TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (transaction_id) REFERENCES Transaction(id) ON DELETE CASCADE,
        FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE);`
        db.query(transctionLogs, (error, result)=>{
            if(error) return console.error("not able to create table transactionlogs", error.message)
            console.log("here is your Transactionlogs ", result)
        })
    })
    db.connect(()=>{
        const RecurringPayments = `CREATE TABLE IF NOT EXISTS RecurringPayments (
            id INT AUTO_INCREMENT PRIMARY KEY,
            user_id INT NOT NULL,
            transaction_id INT NOT NULL,
            frequency ENUM('daily', 'weekly', 'monthly', 'yearly') NOT NULL,
            next_payment_date DATE NOT NULL,
            status ENUM('active', 'paused', 'cancelled') DEFAULT 'active',
            FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE,
            FOREIGN KEY (transaction_id) REFERENCES Transaction(id) ON DELETE CASCADE);`
            db.query(RecurringPayments, (error, result)=>{
                if(error) return console.error("not able to create table RecurringPayments", error.message)
                console.log("here is your RecurringPayments ", result)
            })
    })

    db.connect(()=>{
    const transcationfailed =  `CREATE TABLE IF NOT EXISTS FailedTransactions (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        transaction_id INT NULL,
        reason TEXT NOT NULL,
        ip_address VARCHAR(45),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE,
        FOREIGN KEY (transaction_id) REFERENCES Transaction(id) ON DELETE SET NULL);`
        db.query(transcationfailed, (error, result)=>{
            if(error) return console.error("not able to create table transcationfailed", error.message)
            console.log("here is your transcationfailed ", result)
        })
})
db.connect(()=>{
    const Paypal = `CREATE TABLE IF NOT EXISTS PayPalTransactions (
        id INT AUTO_INCREMENT PRIMARY KEY,
        transaction_id INT NOT NULL,
        paypal_email VARCHAR(100) NOT NULL,
        paypal_transaction_id VARCHAR(50) UNIQUE NOT NULL,
        status ENUM('pending', 'completed', 'failed') DEFAULT 'pending',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (transaction_id) REFERENCES Transaction(id) ON DELETE CASCADE
    );`
    db.query(Paypal, (error, result)=>{
        if(error) return console.error("not able to create table Paypal", error.message)
        console.log("here is your Paypal ", result)

    })
})
db.connect(()=> {
    const transaction = `CREATE TABLE IF NOT EXISTS transaction(id INT AUTO_INCREMENT PRIMARY KEY,  user_id INT NOT NULL,
    amount DECIMAL(15,2) NOT NULL,
    currency VARCHAR(10) DEFAULT 'USD',
    payment_method_id INT NOT NULL,
    reference VARCHAR(50) UNIQUE NOT NULL,
    status ENUM('pending', 'completed', 'failed', 'reversed') DEFAULT 'pending',
    fee DECIMAL(10,2) DEFAULT 0.00,
    discount DECIMAL(10,2) DEFAULT 0.00,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE,
    FOREIGN KEY (payment_method_id) REFERENCES PaymentMethod(id) ON DELETE CASCADE)`;
    db.query(transaction, (error, result)=>{
        if(error) return console.error("not able to create table transaction", error.message)
        console.log("here is your Transaction ", result)
    })
})

    
db.connect(()=>{
    const sql =`ALTER TABLE users 
     ADD COLUMN created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      ADD COLUMN updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP`
    db.query(sql, (error, result)=>{
        if(error) return console.error("not able to alter table", error.message)
        console.log("here is your result", result)
    })
 })

