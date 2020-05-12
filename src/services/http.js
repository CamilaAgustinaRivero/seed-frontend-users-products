const API = 'http://localhost:3001';

class HTTP {
    static async get(url) {
        const response = await fetch(`${API}/${url}`);
        try {
            if (response.ok) {
                return response.json();
            }
        }
        catch(err) {
            return {error: true};
        }
    }

    static async post(url,context){
        const response = await fetch(`${API}/${url}`, {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(context)
        });
        try {
            if (response.ok) {
                return response.json();
            }
        }
        catch(err) {
            return {error: true};
        }

    }
}

export default HTTP;