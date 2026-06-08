"use client";

export default function ContactPage() {
  return (
    <div className="flex-1 pixel-grid py-12 px-6 md:px-12">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-10">
        
        {/* Header section */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="pixel-sticker bg-primary-container text-black">INBOX_INITIALIZED</span>
            <span className="font-code text-sm">/root/contact/</span>
          </div>
          <h1 className="display-lg text-black text-shadow-hard uppercase">
            ESTABLISH_LINK
          </h1>
          <p className="body-lg text-gray-700 max-w-xl">
            Have a project, collaboration proposal, or technical question? Submit the form packets below, and our systems will process them.
          </p>
        </div>

        {/* Contact Form Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Form */}
          <div className="lg:col-span-2 neo-card">
            <div className="neo-card-header">
              <span>[SUBMIT_PACKET] // CLIENT_FORM</span>
            </div>
            <div className="neo-card-body">
              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="neo-input-wrapper">
                    <label className="neo-label">sender_name:</label>
                    <input type="text" placeholder="John Doe" className="neo-input" required />
                  </div>
                  <div className="neo-input-wrapper">
                    <label className="neo-label">sender_email:</label>
                    <input type="email" placeholder="john@company.com" className="neo-input" required />
                  </div>
                </div>

                <div className="neo-input-wrapper">
                  <label className="neo-label">project_budget_range:</label>
                  <select className="neo-input cursor-pointer" required>
                    <option value="">&gt; select_range</option>
                    <option value="sm">&lt; $10k (Custom Utility Tooling)</option>
                    <option value="md">$10k - $30k (Corporate Website / Next.js app)</option>
                    <option value="lg">$30k - $100k (Full Custom Stack & Engine)</option>
                    <option value="xl">&gt; $100k (Enterprise Scaling & WASM integration)</option>
                  </select>
                </div>

                <div className="neo-input-wrapper">
                  <label className="neo-label">system_requirements_specs:</label>
                  <textarea 
                    rows={6} 
                    placeholder="Provide detailed information regarding the features and performance requirements of the system to build..." 
                    className="neo-input" 
                    required 
                  />
                </div>

                <div>
                  <button type="submit" className="neo-btn w-full md:w-auto">
                    transmit_inquiry.sh
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Quick Info Sidebar */}
          <div className="flex flex-col gap-8">
            
            <div className="neo-card">
              <div className="neo-card-header bg-secondary">
                <span>[DIRECT_CHANNELS]</span>
              </div>
              <div className="neo-card-body flex flex-col gap-6">
                <div>
                  <h4 className="font-code font-bold uppercase text-black mb-1">GENERAL ENQUIRIES</h4>
                  <p className="body-md text-gray-700">hello@mebius.tech</p>
                </div>
                <div>
                  <h4 className="font-code font-bold uppercase text-black mb-1">SECURITY / INCIDENTS</h4>
                  <p className="body-md text-gray-700">ops@mebius.tech</p>
                </div>
                <div>
                  <h4 className="font-code font-bold uppercase text-black mb-1">SECURE PGP KEY</h4>
                  <p className="body-md text-gray-500 font-code text-xs break-all">
                    0x8F3C9D2A1B0E7F4C...
                  </p>
                </div>
              </div>
            </div>

            <div className="neo-card">
              <div className="neo-card-header bg-tertiary">
                <span>[SYSTEM_METRICS]</span>
              </div>
              <div className="neo-card-body">
                <table className="w-full text-left font-code text-sm">
                  <tbody>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 font-bold">AVG_RESPONSE:</td>
                      <td className="py-2 text-right text-secondary">&lt; 12 Hours</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-2 font-bold">SLOTS_Q3:</td>
                      <td className="py-2 text-right text-green-700">2 Available</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-bold">LABS_STATUS:</td>
                      <td className="py-2 text-right text-blue-accent font-bold">OPERATIONAL</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
