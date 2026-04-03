from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Image
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import getSampleStyleSheet
from datetime import datetime
import os


def generate_report(data, output_path):
    """
    data = {
        "patient_name": "John Doe",
        "prediction": "Glioma",
        "confidence": 96.45,
        "image_path": "uploads/img.png",
        "gradcam_path": "outputs/gradcam/img.png"
    }
    """

    # Create PDF
    doc = SimpleDocTemplate(output_path, pagesize=letter)
    styles = getSampleStyleSheet()

    content = []

    # ========================
    # TITLE
    # ========================
    content.append(Paragraph("Brain Tumor Detection Report", styles['Title']))
    content.append(Spacer(1, 20))

    # ========================
    # PATIENT DETAILS
    # ========================
    content.append(Paragraph(f"Patient Name: {data.get('patient_name', 'N/A')}", styles['Normal']))
    content.append(Paragraph(f"Date: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}", styles['Normal']))
    content.append(Spacer(1, 20))

    # ========================
    # RESULTS
    # ========================
    content.append(Paragraph("<b>Prediction Result</b>", styles['Heading2']))
    content.append(Spacer(1, 10))

    content.append(Paragraph(f"Tumor Type: {data['prediction']}", styles['Normal']))
    content.append(Paragraph(f"Confidence: {data['confidence']}%", styles['Normal']))
    content.append(Spacer(1, 20))

    # ========================
    # ORIGINAL MRI IMAGE
    # ========================
    if os.path.exists(data["image_path"]):
        content.append(Paragraph("<b>Original MRI Image</b>", styles['Heading3']))
        content.append(Spacer(1, 10))

        img = Image(data["image_path"], width=250, height=250)
        content.append(img)
        content.append(Spacer(1, 20))

    # ========================
    # GRADCAM IMAGE
    # ========================
    if os.path.exists(data["gradcam_path"]):
        content.append(Paragraph("<b>Grad-CAM Visualization</b>", styles['Heading3']))
        content.append(Spacer(1, 10))

        grad_img = Image(data["gradcam_path"], width=250, height=250)
        content.append(grad_img)
        content.append(Spacer(1, 20))

    # ========================
    # DISCLAIMER
    # ========================
    content.append(Paragraph("<b>Disclaimer:</b>", styles['Heading3']))
    content.append(Spacer(1, 10))

    content.append(Paragraph(
        "This report is generated using an AI-based system and is intended "
        "for educational purposes only. It should not be considered as a "
        "medical diagnosis. Please consult a qualified medical professional "
        "for accurate diagnosis and treatment.",
        styles['Normal']
    ))

    # Build PDF
    doc.build(content)

    return output_path