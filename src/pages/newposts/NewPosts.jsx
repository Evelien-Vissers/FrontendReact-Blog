import './NewPosts.css';
import {useState} from "react";


const NewPost = () => {
    const [formData, setFormData] = useState({
        title: '',
        subtitle: '',
        author: '',
        message: ''
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setError(''); // Reset error on input change
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { title, subtitle, author, message } = formData;

        // Validatie
        if (!title || !subtitle || !author || !message) {
            setError('Alle velden zijn verplicht.');
            return;
        }

        if (message.length < 300 || message.length > 2000) {
            setError('Het bericht moet minimaal 300 en maximaal 2000 karakters lang zijn.');
            return;
        }

        // Als validatie slaagt
        setSuccess('Blogpost succesvol ingediend!');
        console.log('Ingediende gegevens:', formData);
        // Reset het formulier
        setFormData({
            title: '',
            subtitle: '',
            author: '',
            message: ''
        });
    };

    return (
        <div className="newpost-container">
            <h1>Nieuwe Blogpost</h1>
            <form onSubmit={handleSubmit} className="newpost-form">
                <div className="form-group">
                    <label htmlFor="title">Titel</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="subtitle">Subtitel</label>
                    <input
                        type="text"
                        id="subtitle"
                        name="subtitle"
                        value={formData.subtitle}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="author">Auteur</label>
                    <input
                        type="text"
                        id="author"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Bericht</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                {error && <p className="error-message">{error}</p>}
                {success && <p className="success-message">{success}</p>}
                <button type="submit" className="submit-button">
                    Verstuur
                </button>
            </form>
        </div>
    );
};

export default NewPost;

