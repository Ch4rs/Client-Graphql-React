import React from 'react';
import './Login.css';
export default function Login() {
  return(
    <div class="columns is-mobile">
    <div class="column is-4 is-offset-4">
        <form>
            <div class="field">
                <label class="label">Userame</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Text input"/>
                </div>
            </div>
            <div class="field">
                <label class="label">Password</label>
                <div class="control">
                    <input class="input" type="password" placeholder="Text input"/>
                </div>
            </div>
            <div class="field is-grouped">
                <div class="control">
                    <button class="button is-link">Submit</button>
                </div>
                <div class="control">
                    <button class="button is-link is-light">Cancel</button>
                </div>
            </div>
        </form>
    </div>
  </div>
    
  )
}