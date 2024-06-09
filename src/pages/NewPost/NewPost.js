import React from "react";
import "./newpost.css";
//import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Meta from "../../components/Meta";
import BreadCrumb from "../../components/BreadCrumb";
import DropFileInput from "../../components/DropFileInput.js";

const NewPost = () => {
  //const [value, setValue] = useState("");
  //const [images, setImages] = useState([]);
 // const [error, setError] = useState("");
 const [error] = useState("");
  const onFileChange = (files) => {
   
  };

  return (
    <>
      <Meta title={"Login"} />
      <BreadCrumb title="New Post" />
      <div className="newPostPage">
        <div className="formContainer">
          <h3>Nouveau Post</h3>
          <div className="wrapper">
            <form>
              <div className="item">
                <label htmlFor="title">Titre</label>
                <input id="title" name="title" type="text" />
              </div>
              <div className="item">
                <label htmlFor="type">Property</label>
                <select name="property">
                  <option value="apartment">Appartement</option>
                  <option value="house">Maison</option>
                  <option value="duplex">Duplex</option>
                  <option value="villa">Villa</option>
                  <option value="shop">Boutique</option>
                  <option value="plot">Terrain</option>
                  <option value="other">Autres</option>
                </select>
              </div>
              <div className="item">
                <label htmlFor="price">Superficie (m2)</label>
                <input id="price" name="price" type="number" />
              </div>

              <div className="item">
                <label htmlFor="address">Adresse</label>
                <input id="address" name="address" type="text" />
              </div>

              <div className="item">
                <label htmlFor="city">Ville</label>
                <input id="city" name="city" type="text" />
              </div>
              <div className="item">
                <label htmlFor="bedroom">Nombre de Salon</label>
                <input min={1} id="palour" name="palour" type="number" />
              </div>
              <div className="item">
                <label htmlFor="bedroom">Nombre de chambre</label>
                <input min={1} id="bedroom" name="bedroom" type="number" />
              </div>
              <div className="item">
                <label htmlFor="bedroom">Nombre de douche</label>
                <input min={1} id="bathroom" name="bathroom" type="number" />
              </div>
              <div className="item">
                <label htmlFor="bedroom">Distance avec la route </label>
                <input min={1} id="bedroom" name="bedroom" type="number" />
              </div>
              <div className="item">
                <label htmlFor="bathroom">Prix</label>
                <input min={1} id="bathroom" name="bathroom" type="number" />
              </div>

              <div className="item">
                <label htmlFor="utilities">Responsable</label>
                <select name="utilities">
                  <option value="owner">Proprietaire</option>
                  <option value="tenant">Agence immobilière</option>
                  <option value="shared">Agent Immobilier </option>
                </select>
              </div>
              <div className="item">
                <label htmlFor="size">Année de Construction</label>
                <input min={0} id="size" name="size" type="number" />
              </div>
              <div className="item">
                <label htmlFor="school">Etat des lieux</label>
                <input min={0} id="school" name="state" type="texte" />
              </div>

              <div className="item description">
                <label htmlFor="desc">Commentaires</label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="4"
                ></textarea>
              </div>
              <label htmlFor="desc">Photos</label>
              <div className="box">
                <DropFileInput onFileChange={(files) => onFileChange(files)} />
              </div>

              <button className="sendButton ">Publier</button>
              {error && <span>error</span>}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewPost;
