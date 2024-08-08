import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Table, Button, Form } from 'react-bootstrap';
import { FaCheck, FaTrash } from 'react-icons/fa';
import Modal from 'react-bootstrap/Modal';

function Requestuser() {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    id: null,
    type: '',
    date_debut: '',
    date_fin: '',
    statut: 'en_attente',
    justification: null // Justification comme pièce jointe
  });

  const [demandes, setDemandes] = useState([
    { id: 1, type: 'Congé annuel', date_debut: '2024-05-01', date_fin: '2024-05-05', statut: 'en_attente', justification: 'Justification de la demande 1' },
    // Autres demandes...
  ]);

  const handleClose = () => {
    setShow(false);
    if (!formData.type || !formData.date_debut || !formData.date_fin || !formData.justification) {
      alert('Veuillez remplir tous les champs requis.');
      return;
    }
    if (formData.id) {
      const updatedDemandes = demandes.map(demande =>
        demande.id === formData.id ? formData : demande
      );
      setDemandes(updatedDemandes);
    } else {
      const newDemande = {
        id: demandes.length + 1,
        type: formData.type,
        date_debut: formData.date_debut,
        date_fin: formData.date_fin,
        statut: formData.statut,
        justification: formData.justification
      };
      setDemandes([...demandes, newDemande]);
    }
    setFormData({
      id: null,
      type: '',
      date_debut: '',
      date_fin: '',
      statut: 'en_attente',
      justification: null // Réinitialiser la justification
    });
  };

  const handleShow = () => setShow(true);

  const handleModify = (demande) => {
    setFormData({
      id: demande.id,
      type: demande.type,
      date_debut: demande.date_debut,
      date_fin: demande.date_fin,
      statut: demande.statut,
      justification: demande.justification
    });
    setShow(true);
  };

  const handleDelete = (demande) => {
    const confirmation = window.confirm('Êtes-vous sûr de vouloir supprimer cette demande ?');
    if (confirmation) {
      const updatedDemandes = demandes.filter(d => d.id !== demande.id);
      setDemandes(updatedDemandes);
    }
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home" className="text-primary fs-4 fw-bold">Gestion de congé</Navbar.Brand>
        </Container>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{formData.id ? 'Modifier la demande' : 'Ajouter une demande'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formType">
              <Form.Label>Type de congé</Form.Label>
              <Form.Control as="select" value={formData.type} onChange={(e) => setFormData({...formData, type: e.target.value})}>
                <option value="">Sélectionnez un type de congé</option>
                <option value="Congé annuel">Congé annuel</option>
                <option value="Congé maladie">Congé maladie</option>
                <option value="Congé sans solde">Congé sans solde</option>
                {/* Autres options de type de congé */}
              </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDateDebut">
              <Form.Label>Date début</Form.Label>
              <Form.Control type="date" placeholder="Date début" value={formData.date_debut} onChange={(e) => setFormData({...formData, date_debut: e.target.value})} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDateFin">
              <Form.Label>Date fin</Form.Label>
              <Form.Control type="date" placeholder="Date fin" value={formData.date_fin} onChange={(e) => setFormData({...formData, date_fin: e.target.value})} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formJustification">
              <Form.Label>Justification (Pièce jointe)</Form.Label>
              <Form.Control type="file" onChange={(e) => setFormData({...formData, justification: e.target.files[0]})} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Fermer</Button>
          <Button variant="primary" onClick={handleClose}>{formData.id ? 'Modifier' : 'Ajouter'}</Button>
        </Modal.Footer>
      </Modal>

      <div className="p-4">
        <Button className="custom-button" onClick={handleShow}>Ajouter une demande</Button>
      </div>
      <Container className="my-5">
        <h2>Mes demandes de congé</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Type</th>
              <th>Date début</th>
              <th>Date fin</th>
              <th>Statut</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {demandes.map((demande, index) => (
              <tr key={demande.id}>
                <td>{index + 1}</td>
                <td>{demande.type}</td>
                <td>{demande.date_debut}</td>
                <td>{demande.date_fin}</td>
                <td>{demande.statut}</td>
                <td>
                  <Button variant="success" onClick={() => handleModify(demande)}><FaCheck /> Modifier</Button>{' '}
                  <Button variant="danger" onClick={() => handleDelete(demande)}><FaTrash /> Supprimer</Button>{' '}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default Requestuser;