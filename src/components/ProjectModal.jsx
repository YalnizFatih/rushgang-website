import React from 'react';

const ProjectModal = ({ project, isOpen, onClose }) => {
    if (!project || !isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-screen items-center justify-center p-4">
                <div className="bg-gaming-dark/95 w-full max-w-2xl rounded-xl">
                    {/* Modal içeriği */}
                    <div className="p-4 sm:p-6 lg:p-8">
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
                            {project.title}
                        </h3>

                        {/* İstatistikler */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                            {/* ... */}
                        </div>

                        {/* Diğer içerikler */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal; 