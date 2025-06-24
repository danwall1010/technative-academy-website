import { useEffect } from 'react';

const HubSpotForm = ({ title = "Ready to Transform Your Career?", subtitle = "Express your interest and take the first step towards your new future." }) => {
  useEffect(() => {
    // Create script element for HubSpot form
    const script = document.createElement('script');
    script.innerHTML = `
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "25238518",
          formId: "755147f4-2c1c-488d-9538-d4410784fa97",
          region: "eu1",
          target: '#hubspot-form-target'
        });
      } else {
        // Wait for HubSpot to load
        const checkHubSpot = setInterval(() => {
          if (window.hbspt) {
            window.hbspt.forms.create({
              portalId: "25238518",
              formId: "755147f4-2c1c-488d-9538-d4410784fa97",
              region: "eu1",
              target: '#hubspot-form-target'
            });
            clearInterval(checkHubSpot);
          }
        }, 100);
        setTimeout(() => clearInterval(checkHubSpot), 10000);
      }
    `;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="py-4 md:py-16 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
      <div className="w-full max-w-none mx-auto px-1 sm:px-2 lg:px-4">
        <div className="bg-white/95 backdrop-blur-md rounded-lg md:rounded-2xl p-2 md:p-6 shadow-2xl border border-white/20 mx-1 md:mx-4">
          {title && (
            <div className="text-center mb-4 md:mb-6">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 md:mb-3">
                {title}
              </h2>
              {subtitle && (
                <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto px-1">
                  {subtitle}
                </p>
              )}
            </div>
          )}
          
          {/* Direct HubSpot Form Embedding */}
          <div 
            id="hubspot-form-target"
            className="w-full"
            style={{ 
              minHeight: '400px',
              background: 'white',
              borderRadius: '4px',
              padding: '5px',
              width: '100%',
              maxWidth: '100%'
            }}
          >
            {/* HubSpot form will load here */}
          </div>
          
          {/* Ultra-aggressive mobile-responsive styles for HubSpot form */}
          <style dangerouslySetInnerHTML={{
            __html: `
              /* Force full width container */
              #hubspot-form-target {
                width: 100% !important;
                max-width: 100% !important;
                margin: 0 !important;
                padding: 5px !important;
              }
              
              /* Force form to use full width */
              #hubspot-form-target .hs-form,
              #hubspot-form-target .hs-form > div,
              #hubspot-form-target .hs-form fieldset {
                background: white !important;
                color: #333 !important;
                width: 100% !important;
                max-width: 100% !important;
                margin: 0 !important;
                padding: 0 !important;
                box-sizing: border-box !important;
              }
              
              /* Force all form fields to use full width */
              #hubspot-form-target .hs-form-field,
              #hubspot-form-target .hs-form-field > div,
              #hubspot-form-target .hs-form-field .hs-fieldtype-text,
              #hubspot-form-target .hs-form-field .hs-fieldtype-email,
              #hubspot-form-target .hs-form-field .hs-fieldtype-select,
              #hubspot-form-target .hs-form-field .hs-fieldtype-textarea {
                margin-bottom: 1rem !important;
                width: 100% !important;
                max-width: 100% !important;
                box-sizing: border-box !important;
              }
              
              /* Force labels to be readable */
              #hubspot-form-target .hs-form-field label,
              #hubspot-form-target .hs-form-field .hs-form-required {
                color: #333 !important;
                font-weight: 500 !important;
                margin-bottom: 0.5rem !important;
                display: block !important;
                font-size: 14px !important;
                width: 100% !important;
              }
              
              /* Force all inputs to use full width and be touch-friendly */
              #hubspot-form-target .hs-input,
              #hubspot-form-target .hs-input[type="text"],
              #hubspot-form-target .hs-input[type="email"],
              #hubspot-form-target .hs-input[type="tel"],
              #hubspot-form-target select,
              #hubspot-form-target textarea {
                width: 100% !important;
                max-width: 100% !important;
                min-width: 100% !important;
                padding: 12px !important;
                border: 1px solid #d1d5db !important;
                border-radius: 6px !important;
                background: white !important;
                color: #333 !important;
                font-size: 16px !important;
                box-sizing: border-box !important;
                margin: 0 !important;
                display: block !important;
              }
              
              /* Force textarea to be properly sized */
              #hubspot-form-target textarea {
                min-height: 80px !important;
                resize: vertical !important;
              }
              
              /* Force button to be full width and touch-friendly */
              #hubspot-form-target .hs-button,
              #hubspot-form-target input[type="submit"] {
                background: linear-gradient(to right, #2563eb, #7c3aed) !important;
                color: white !important;
                padding: 14px 20px !important;
                border: none !important;
                border-radius: 8px !important;
                font-weight: 600 !important;
                cursor: pointer !important;
                width: 100% !important;
                max-width: 100% !important;
                font-size: 16px !important;
                margin-top: 1rem !important;
                box-sizing: border-box !important;
                display: block !important;
              }
              
              #hubspot-form-target .hs-button:hover,
              #hubspot-form-target input[type="submit"]:hover {
                background: linear-gradient(to right, #1d4ed8, #6d28d9) !important;
              }
              
              /* Force radio and checkbox containers to use full width */
              #hubspot-form-target .hs-fieldtype-radio,
              #hubspot-form-target .hs-fieldtype-checkbox {
                width: 100% !important;
              }
              
              #hubspot-form-target .hs-fieldtype-radio .hs-form-radio-display,
              #hubspot-form-target .hs-fieldtype-checkbox .hs-form-checkbox-display {
                margin-bottom: 0.5rem !important;
                width: 100% !important;
              }
              
              /* Force rich text to be readable */
              #hubspot-form-target .hs-richtext,
              #hubspot-form-target .hs-richtext p {
                font-size: 13px !important;
                line-height: 1.4 !important;
                color: #666 !important;
                width: 100% !important;
              }
              
              /* Ultra-aggressive mobile optimizations */
              @media (max-width: 768px) {
                #hubspot-form-target {
                  padding: 2px !important;
                  margin: 0 !important;
                  width: 100% !important;
                }
                
                #hubspot-form-target .hs-form {
                  padding: 0 !important;
                  margin: 0 !important;
                  width: 100% !important;
                }
                
                #hubspot-form-target .hs-form-field {
                  margin-bottom: 1.2rem !important;
                  width: 100% !important;
                  padding: 0 !important;
                }
                
                #hubspot-form-target .hs-input,
                #hubspot-form-target .hs-input[type="text"],
                #hubspot-form-target .hs-input[type="email"],
                #hubspot-form-target .hs-input[type="tel"],
                #hubspot-form-target select,
                #hubspot-form-target textarea {
                  padding: 14px 12px !important;
                  font-size: 16px !important;
                  border-radius: 8px !important;
                  width: 100% !important;
                  margin: 0 !important;
                }
                
                #hubspot-form-target .hs-button,
                #hubspot-form-target input[type="submit"] {
                  padding: 16px 20px !important;
                  font-size: 18px !important;
                  border-radius: 10px !important;
                  width: 100% !important;
                  margin: 1rem 0 0 0 !important;
                }
                
                #hubspot-form-target .hs-richtext,
                #hubspot-form-target .hs-richtext p {
                  font-size: 12px !important;
                  line-height: 1.3 !important;
                }
              }
              
              /* Force override any container restrictions */
              @media (max-width: 480px) {
                #hubspot-form-target {
                  width: 100vw !important;
                  max-width: 100vw !important;
                  margin-left: calc(-50vw + 50%) !important;
                  margin-right: calc(-50vw + 50%) !important;
                  padding: 10px !important;
                  box-sizing: border-box !important;
                }
              }
            `
          }} />
        </div>
      </div>
    </div>
  );
};

export default HubSpotForm;

