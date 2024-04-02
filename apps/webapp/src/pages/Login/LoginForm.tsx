import React, { useState } from 'react';

const LoginForm: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return (
        <div style={styles.formContainer}>
            <form style={styles.form}>
                <div style={styles.formGroup}>
                    <label htmlFor="email" style={styles.label}>Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={styles.input}
                        required
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="password" style={styles.label}>Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={styles.input}
                        required
                    />
                </div>
                <button type="submit" style={styles.button}>Login</button>
            </form>
        </div>
    );
};

const styles = {
    formContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
    form: {
        width: '100%',
        maxWidth: '400px',
        padding: '80px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    formGroup: {
        marginBottom: '20px',
    },
    label: {
        display: 'block',
        marginBottom: '5px',
    },
    input: {
        width: '100%',
        padding: '10px 0'
    },
    button: {
        width: '100%',
        padding: '10px',
        // backgroundColor: '#007bff',
        color: '#000',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginTop: '25px',

    },
};

export default LoginForm;
